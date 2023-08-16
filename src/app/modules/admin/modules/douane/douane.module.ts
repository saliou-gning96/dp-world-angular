import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DouaneRoutingModule } from './douane-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { LayoutComponent } from './layout/layout.component';
import { FormSearchComponent } from './component/form-search/form-search.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { FormDetailComponent } from './component/form-detail/form-detail.component';
import { NewComponent } from './pages/new/new.component';
import { ListTransitComponent } from './component/list-transit/list-transit.component';
import { ListArticleComponent } from './component/list-article/list-article.component';
import { ArticleQuantityComponent } from './component/article-quantity/article-quantity.component';


@NgModule({
  declarations: [
    IndexComponent,
    LayoutComponent,
    FormSearchComponent,
    FormDetailComponent,
    NewComponent,
    ListTransitComponent,
    ListArticleComponent,
    ArticleQuantityComponent
  ],
  imports: [
    CommonModule,
    DouaneRoutingModule,
    SharedModule
  ]
})
export class DouaneModule { }
