import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/services/auth.guard';
import { ProductComponent } from './component/admin/product/product.component';
import { CategoryProductComponent } from './component/user/category-product/category-product.component';
import { ViewProductComponent } from './component/user/view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ProductComponent,canActivate: [AuthGuard]},
  { path: 'view-product/:id', component: ViewProductComponent,canActivate: [AuthGuard] },
  { path: 'category-product', component: CategoryProductComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
