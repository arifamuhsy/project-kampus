import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsSharedModule } from 'src/app/shared/components-shared/components-shared.module';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ScoreComponent } from './dashboard-student/score/score.component';
import { MatButtonModule}  from '@angular/material/button';
import { CarouselModule,WavesModule } from 'angular-bootstrap-md';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CoursesRegistrationComponent } from './dashboard-student/courses-registration/courses-registration.component';
import { MyCoursesComponent } from './dashboard-student/my-courses/my-courses.component';
import { MyScheduleComponent } from './dashboard-student/my-schedule/my-schedule.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DashboardStudentComponent,
    ScoreComponent,
    CoursesRegistrationComponent,
    MyCoursesComponent,
    MyScheduleComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    CarouselModule,
    WavesModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatNativeDateModule,
    ComponentsSharedModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule
  ]
})
export class StudentModule { }
