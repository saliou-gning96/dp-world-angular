import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DouaneRoutingModule } from './douane-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { LayoutComponent } from './layout/layout.component';
import { FormSearchComponent } from './component/form-search/form-search.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { NewComponent } from './pages/new/new.component';
import { ListTransitComponent } from './component/list-transit/list-transit.component';
import { ListArticleComponent } from './component/list-article/list-article.component';
import { ArticleQuantityComponent } from './component/article-quantity/article-quantity.component';
import { RecapComponent } from './component/recap/recap.component';


@NgModule({
  declarations: [
    IndexComponent,
    LayoutComponent,
    FormSearchComponent,
    NewComponent,
    ListTransitComponent,
    ListArticleComponent,
    ArticleQuantityComponent,
    RecapComponent
  ],
  imports: [
    CommonModule,
    DouaneRoutingModule,
    SharedModule
  ]
})
export class DouaneModule { }
