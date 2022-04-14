import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ScoreComponent } from './dashboard-student/score/score.component';


@NgModule({
  declarations: [
    DashboardStudentComponent,
    ScoreComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatExpansionModule
  ]
})
export class StudentModule { }
