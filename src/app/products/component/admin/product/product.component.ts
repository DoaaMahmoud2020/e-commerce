import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { CommonService } from '../../../../shared/services/common.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/products/models/product';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductAddEditComponent } from '../product-add-edit/product-add-edit.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @ViewChild('dialogRef') dialogRef!: TemplateRef<any>;
  constructor(private common: CommonService, public dialog: MatDialog) {}

  loading: boolean = false;
  displayedColumns: string[] = [
    'id',
    'title',
    'price',
    // 'description',
    'category',
    'action',
    // 'image',
  ];

  productData: Product[] = [];
  pageSizes = [5, 10, 20];
  productId: number;
  dataSource!: MatTableDataSource<Product>;
  dataSourceWithPageSize!: MatTableDataSource<Product>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('paginatorPageSize') paginatorPageSize!: MatPaginator;

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.loading = true;
    this.common.get('products', {}).subscribe(
      (result: any) => {
        this.productData = result;
        this.settingForMatTable();
        this.loading = false;
      },
      (error) => {}
    );
  }
  settingForMatTable() {
    this.dataSource = new MatTableDataSource(this.productData);
    this.dataSourceWithPageSize = new MatTableDataSource(this.productData);
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }

  deleteProduct() {
    this.loading = true;
    this.common.delete('products/' + this.productId, {}).subscribe(
      (response) => {
        this.getAllProducts();
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }

 /**
  * The function opens a dialog box and passes the product id to the dialog box
  * @param {number} id - number - the id of the product that we want to delete
  */
  openTempDialog(id: number) {
    this.productId = id;
    const myTempDialog = this.dialog.open(this.dialogRef, {
      data: this.productId,
    });
    myTempDialog.afterClosed().subscribe((res) => {
      this.getAllProducts();
    });
  }
/**
 * It opens a dialog box with the ProductAddEditComponent component, and when the dialog box is closed,
 * it calls the getAllProducts() function to refresh the list of products
 * @param {any} data - any - This is the data that will be passed to the dialog component.
 */
  openEditForm(data: any) {
    const dialogRef = this.dialog.open(ProductAddEditComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAllProducts();
        }
      },
    });
  }
/**
 * It opens a dialog box, and when the dialog box is closed, it calls the getAllProducts() function
 */
  openAddEditProdForm() {
    const dialogRef = this.dialog.open(ProductAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAllProducts();
        }
      },
    });
  }
}
