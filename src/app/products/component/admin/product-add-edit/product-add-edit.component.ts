import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/shared/services/common.service';
@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss']
})
export class ProductAddEditComponent implements OnInit {
  productForm: FormGroup;
  loading: boolean = false;

  categoriesData: string[] = [];
  constructor( private _fb: FormBuilder,
    private common: CommonService,
    private dialogRef: MatDialogRef<ProductAddEditComponent>,
  /* The above code is creating a form group with the form fields. */
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.productForm = this._fb.group({
        title: '',
        price: '',
        description: '',
        image: '',
        category: ''
      });
    }

  /**
   * The function is called when the component is initialized. It sets the value of the form to the
   * data passed in from the parent component. It then calls the getAllCategories() function to get all
   * the categories from the database
   */
  ngOnInit(): void {
    this.productForm.patchValue(this.data);
    this.getAllCategories();
  }
 /**
  * This function is used to get all the categories from the database
  */
  getAllCategories() {
    this.common.get('products/categories', {}).subscribe((result: any) => {
      this.categoriesData = result;
    });
  }
 /**
  * If the form is valid, then either update the product or add a new product
  */
  onFormSubmit() {
    this.loading=true;
    if (this.productForm.valid) {
      if (this.data) {
        this.common
          .put('products/'+this.data.id, this.productForm.value)
          .subscribe({
            next: (val: any) => {
              this.common.openSnackBar('Product detail updated!');
              this.dialogRef.close(true);
              this.loading=false;
            },
            error: (err: any) => {
              console.error(err);
              this.loading=false;
            },
          });
      } else {
        this.common.post('products',this.productForm.value).subscribe({
          next: (val: any) => {
            this.common.openSnackBar('Product added successfully');
            this.dialogRef.close(true);
            this.loading=false;
          },
          error: (err: any) => {
            console.error(err);
            this.loading=false;

          },
        });
      }
    }
  }
}
