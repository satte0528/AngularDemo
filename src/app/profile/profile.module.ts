import { MaterialModule } from './../shared/modules/material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileHomeComponent } from './profile-home/profile-home.component';


@NgModule({
  declarations: [ProfileHomeComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule
  ]
})
export class ProfileModule { }
