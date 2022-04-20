import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsSharedModule } from 'src/app/shared/components-shared/components-shared.module';

import { LecturerRoutingModule } from './lecturer-routing.module';
import { DashboardLecturerComponent } from './dashboard-lecturer/dashboard-lecturer.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule}  from '@angular/material/button';
import { CarouselModule,WavesModule } from 'angular-bootstrap-md';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    DashboardLecturerComponent
  ],
  imports: [
    CommonModule,
    LecturerRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    CarouselModule,
    WavesModule,
    MatNativeDateModule,FormsModule,ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    ComponentsSharedModule
  ]
})
export class LecturerModule { }
