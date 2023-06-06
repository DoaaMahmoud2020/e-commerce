import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';
@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss'],
})
export class ProductAddEditComponent implements OnInit, OnDestroy {
  productForm: FormGroup;
  loading: boolean = false;

  categoriesData: string[] = [];
  // Create a variable to store the subscription
  
  private categoriesSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    public commonService: CommonService,
    private dialogRef: MatDialogRef<ProductAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.productForm = this.fb.group({
      title: '',
      price: '',
      description: '',
      image: '',
      category: '',
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
    this.categoriesSubscription = this.commonService
      .get('products/categories', {})
      .subscribe((result: string[]) => {
        this.categoriesData = result;
      });
  }
  /**
   * If the form is valid, then either update the product or add a new product
   */
  onFormSubmit() {
    this.loading = true;
    if (this.productForm.valid) {
      if (this.data) {
        this.commonService
          .put('products/' + this.data.id, this.productForm.value)
          .subscribe({
            next: () => {
              this.commonService.openSnackBar('Product detail updated!');
              this.dialogRef.close(true);
              this.loading = false;
            },
            error: (err: Error) => {
              this.loading = false;
            },
          });
      } else {
        this.commonService.post('products', this.productForm.value).subscribe({
          next: () => {
            this.commonService.openSnackBar('Product added successfully');
            this.dialogRef.close(true);
            this.loading = false;
          },
          error: (err: Error) => {
            this.loading = false;
          },
        });
      }
    }
  }

  ngOnDestroy(): void {
    this.categoriesSubscription.unsubscribe();
  }
}
