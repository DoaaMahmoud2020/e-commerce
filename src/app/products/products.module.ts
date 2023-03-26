import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './component/admin/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CategoryProductComponent } from './component/user/category-product/category-product.component';
import { ViewProductComponent } from './component/user/view-product/view-product.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductAddEditComponent } from './component/admin/product-add-edit/product-add-edit.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProductComponent,
    CategoryProductComponent,
    ViewProductComponent,
    ProductAddEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ProductsModule { }
