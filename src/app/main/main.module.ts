import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router'
import { ComponentsSharedModule } from 'src/app/shared/components-shared/components-shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ComponentsSharedModule,
    RouterModule
  ]
})
export class MainModule { }
