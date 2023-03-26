import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './components/footer/footer.component';
import { NotAuthorizedComponent } from '../auth/components/not-authorized/not-authorized.component';
import { NgxLoadingModule } from 'ngx-loading';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotAuthorizedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    NgxLoadingModule.forRoot({
      fullScreenBackdrop: true,
      primaryColour: "#29377a",
    }),
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    TranslateModule,
    NotAuthorizedComponent,
    NgxLoadingModule
  ]
})
export class SharedModule { }
