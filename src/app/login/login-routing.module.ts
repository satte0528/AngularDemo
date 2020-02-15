import { ForgotComponent } from './forgot/forgot.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path     : '',
    component: LoginHomeComponent
  },
  {
    path     : 'forgot',
    component: ForgotComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
