import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/services/auth.guard';
import { EditProductComponent } from './component/admin/edit-product/edit-product.component';
import { NewProductComponent } from './component/admin/new-product/new-product.component';
import { ProductComponent } from './component/admin/product/product.component';
import { CategoryProductComponent } from './component/user/category-product/category-product.component';
import { ViewProductComponent } from './component/user/view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ProductComponent,canActivate: [AuthGuard] },
  { path: 'edit-product', component: EditProductComponent ,canActivate: [AuthGuard]},
  { path: 'new-product', component: NewProductComponent ,canActivate: [AuthGuard]},
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'category-product', component: CategoryProductComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
