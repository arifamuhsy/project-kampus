import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import { NavDashboardComponent } from './nav-dashboard/nav-dashboard.component';
import { FooterDashboardComponent } from './footer-dashboard/footer-dashboard.component'



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    NavDashboardComponent,
    FooterDashboardComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [NavigationComponent,FooterComponent,NavDashboardComponent,FooterDashboardComponent]
})
export class ComponentsSharedModule { }
