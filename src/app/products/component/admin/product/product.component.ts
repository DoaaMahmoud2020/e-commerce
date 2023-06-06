import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  OnDestroy,
} from '@angular/core';
import { CommonService } from '../../../../shared/services/common.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/products/models/product';
import { MatDialog } from '@angular/material/dialog';
import { ProductAddEditComponent } from '../product-add-edit/product-add-edit.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  @ViewChild('dialogRef') dialogRef!: TemplateRef<any>;
  constructor(private commonService: CommonService, public dialog: MatDialog) {}

  loading: boolean = false;
  displayedColumns: string[] = ['id', 'title', 'price', 'category', 'action'];

  productData: Product[] = [];
  pageSizes = [5, 10, 20];
  productId: number;
  dataSource!: MatTableDataSource<Product>;
  dataSourceWithPageSize!: MatTableDataSource<Product>;
  // Create a variable to store the subscription
  private productsSubscription: Subscription;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('paginatorPageSize') paginatorPageSize!: MatPaginator;

  ngOnInit(): void {
    this.getAllProducts();
  }
  /**
   * Retrieves all products from the server.
   * Sets the loading flag, makes an HTTP GET request, and handles the response.
   * Updates the productData array, performs necessary setup for MatTable, and resets the loading flag.
   */
  getAllProducts(): void {
    this.loading = true;
    this.productsSubscription=this.commonService.get('products', {}).subscribe(
      (result: Product[]) => {
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

  /**
   * Deletes a product from the server.
   * Sets the loading flag, makes an HTTP DELETE request, and handles the response.
   * Calls getAllProducts() to refresh the product list and resets the loading flag.
   */
  deleteProduct(): void {
    this.loading = true;
    this.commonService.delete('products/' + this.productId, {}).subscribe(
      (next) => {
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
   * @param {Object} data - Object - This is the data that will be passed to the dialog component.
   */
  openEditForm(data: Object) {
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
  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }
}
