import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsSharedModule } from 'src/app/shared/components-shared/components-shared.module';
import { LoginLecturerComponent } from './login-lecturer/login-lecturer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    LoginLecturerComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsSharedModule,
    HttpClientModule,
  ]
})
export class AuthModule { }
