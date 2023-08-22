import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Article } from '../../../../models/article';
import { Transit } from '../../../../models/transit';
import { DouaneService } from '../../services/douane.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent implements OnInit, OnChanges {

  @Input() listArticles: Article[] = [];
  @Input() poNumber: string|undefined = '';
  @Input() listTransits: Transit[] = [];
  @Output() selectArticleEvent = new EventEmitter<Article>();

  articlesTransits: Article[] = [];

  isLoading = true;

  constructor(
    private douaneService: DouaneService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.listTransits.length && changes['poNumber']) {
      this.douaneService.getListArticle({numPO: this.poNumber}).subscribe((data: any) => {
        this.articlesTransits = data;
        this.isLoading = false;
      })
    }
  }

  selectArticle(article: Article) {
    this.selectArticleEvent.emit(article);
  }

  isChecked(article: Article): boolean
  {
    return this.listArticles.filter(item => item.Numero === article.Numero).length === 1;
  }
}
