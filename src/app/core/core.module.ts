import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { AboutComponent } from './components/about/about.component';
import { AddressComponent } from './components/address/address.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ServicesComponent } from './components/services/services.component';




@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([]),
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    AddressComponent,
    FeedbackComponent,
    AboutComponent,
    FooterComponent,
    ServicesComponent

  ],
  exports: [
    BsNavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
