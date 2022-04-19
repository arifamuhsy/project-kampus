import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLecturerComponent } from './dashboard-lecturer/dashboard-lecturer.component';

const routes: Routes = [
  {
    path: 'lecturer',
    component: DashboardLecturerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LecturerRoutingModule { }
