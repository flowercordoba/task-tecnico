import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    UserDetailComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
