import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContactUsRoutingModule } from './contact-us-routing.module';
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
    ContactUsRoutingModule,
    MatInputModule
  ]
})
export class ContactUsModule { }
