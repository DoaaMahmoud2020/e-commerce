import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    // LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatFormFieldModule,
    AuthRoutingModule,
    MatInputModule
  ]
})
export class AuthModule { }
