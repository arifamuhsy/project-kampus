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



@NgModule({
  declarations: [
    DashboardStudentComponent,
    ScoreComponent,
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
    MatTableModule
  ]
})
export class StudentModule { }
