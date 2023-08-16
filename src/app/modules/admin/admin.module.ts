import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './component/layout/layout.component';
import { SidebarComponent } from './component/layout/sidebar/sidebar.component';
import { ActivePageComponent } from './component/layout/active-page/active-page.component';
import { BreadcrumbComponent } from './component/layout/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    ActivePageComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
