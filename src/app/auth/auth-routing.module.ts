import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';

const routes: Routes = [
  {
    path: 'not-authorized',
    component: NotAuthorizedComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
