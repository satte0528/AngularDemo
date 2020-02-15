import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewemployeeComponent } from './newemployee/newemployee.component';
import { LoginHomeComponent } from '../login/login-home/login-home.component';


const routes: Routes = [
  {
    path     : '',
    component: NewemployeeComponent
  },
  {
    path     : 'add',
    component: NewemployeeComponent
  } 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
