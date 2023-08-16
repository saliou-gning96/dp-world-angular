import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransitRoutingModule } from './transit-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { NewComponent } from './pages/new/new.component';
import { FormSearchComponent } from './component/form-search/form-search.component';
import { FormDetailComponent } from './component/form-detail/form-detail.component';
import { ListPoComponent } from './component/list-po/list-po.component';
import { PieceJointeComponent } from './component/piece-jointe/piece-jointe.component';
import { RecapComponent } from './component/recap/recap.component';


@NgModule({
  declarations: [
    IndexComponent,
    NewComponent,
    FormSearchComponent,
    FormDetailComponent,
    ListPoComponent,
    PieceJointeComponent,
    RecapComponent
  ],
  imports: [
    CommonModule,
    TransitRoutingModule,
    SharedModule
  ],
})
export class TransitModule { }
