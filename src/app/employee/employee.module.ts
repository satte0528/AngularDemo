import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { NewemployeeComponent } from './newemployee/newemployee.component';
// import { MaterialModule } from '../shared/modules/material-module';
import { MaterialModule } from './../shared/modules/material-module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NewemployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class EmployeeModule { }
