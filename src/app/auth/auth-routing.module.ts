import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLecturerComponent } from './login-lecturer/login-lecturer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login-lecturer',
    component: LoginLecturerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
