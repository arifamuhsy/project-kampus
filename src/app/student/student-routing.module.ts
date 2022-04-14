import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
