import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LecturerRoutingModule } from './lecturer-routing.module';
import { DashboardLecturerComponent } from './dashboard-lecturer/dashboard-lecturer.component';


@NgModule({
  declarations: [
    DashboardLecturerComponent
  ],
  imports: [
    CommonModule,
    LecturerRoutingModule
  ]
})
export class LecturerModule { }
