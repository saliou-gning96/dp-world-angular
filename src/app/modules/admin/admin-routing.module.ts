import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'douane',
        loadChildren: () => import('./modules/douane/douane.module').then(m => m.DouaneModule)
      },
      {
        path: 'transit',
        loadChildren: () => import('./modules/transit/transit.module').then(m => m.TransitModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
