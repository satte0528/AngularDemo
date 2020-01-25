import { MaterialModule } from './../shared/modules/material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginHomeComponent } from './login-home/login-home.component';
import { ForgotComponent } from './forgot/forgot.component';


@NgModule({
  declarations: [LoginHomeComponent, ForgotComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule
  ]
})
export class LoginModule { }
