import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesRegistrationComponent } from './dashboard-student/courses-registration/courses-registration.component';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { MyCoursesComponent } from './dashboard-student/my-courses/my-courses.component';
import { ScoreComponent } from './dashboard-student/score/score.component';

const routes: Routes = [
  {
    path: 'student',
    component: DashboardStudentComponent,
  },
  {
    path: 'student/score',
    component: ScoreComponent,
  },
  {
    path: 'student/courses-registration',
    component: CoursesRegistrationComponent,
  },
  {
    path: 'student/my-courses',
    component: MyCoursesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
