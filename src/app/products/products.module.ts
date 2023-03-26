import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './component/admin/product/product.component';
import { EditProductComponent } from './component/admin/edit-product/edit-product.component';
import { NewProductComponent } from './component/admin/new-product/new-product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CategoryProductComponent } from './component/user/category-product/category-product.component';
import { ViewProductComponent } from './component/user/view-product/view-product.component';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    ProductComponent,
    EditProductComponent,
    NewProductComponent,
    CategoryProductComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule
  ]
})
export class ProductsModule { }
