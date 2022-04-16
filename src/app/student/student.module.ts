import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ScoreComponent } from './dashboard-student/score/score.component';
import { MatButtonModule}  from '@angular/material/button';


@NgModule({
  declarations: [
    DashboardStudentComponent,
    ScoreComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatExpansionModule,
    MatButtonModule
  ]
})
export class StudentModule { }
