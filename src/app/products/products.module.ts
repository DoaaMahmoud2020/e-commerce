import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './component/admin/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { CategoryProductComponent } from './component/user/category-product/category-product.component';
import { ViewProductComponent } from './component/user/view-product/view-product.component';
import { ProductAddEditComponent } from './component/admin/product-add-edit/product-add-edit.component';
import { MaterialModule } from '../shared/modules/material/material.module';


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
    MaterialModule
  ]
})
export class ProductsModule { }
