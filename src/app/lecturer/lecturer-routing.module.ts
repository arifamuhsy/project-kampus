import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoursesComponent } from './dashboard-lecturer/add-courses/add-courses.component';
import { AddRecordComponent } from './dashboard-lecturer/add-record/add-record.component';
import { DashboardLecturerComponent } from './dashboard-lecturer/dashboard-lecturer.component';
import { ScheduleComponent } from './dashboard-lecturer/schedule/schedule.component';

const routes: Routes = [
  {
    path: 'lecturer',
    component: DashboardLecturerComponent,
  },
  {
    path: 'lecturer/add-record',
    component: AddRecordComponent,
  },
  {
    path: 'lecturer/add-courses',
    component: AddCoursesComponent,
  },
  {
    path: 'lecturer/schedule',
    component: ScheduleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LecturerRoutingModule { }
