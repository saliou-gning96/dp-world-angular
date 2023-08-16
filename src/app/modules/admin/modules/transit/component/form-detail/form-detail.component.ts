import { Target } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Article } from '../../models/article';
import { PO } from '../../models/po';
import { TransitService } from '../../services/transit/transit.service';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.scss']
})
export class FormDetailComponent implements OnInit, OnChanges {

  @Input() po: PO|null = null;
  @Input() listArticles: Article[] = [];
  @Output() selectArticleEvent = new EventEmitter<Article>();

  isLoading = true;
  public articles: Article[] = [];
  constructor(
    private transitService: TransitService
  ) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['po'] && this.po) {
      this.transitService.getListArticle({numPO: this.po?.Number}).subscribe((data: any) => {
        this.listArticles = data;
        this.isLoading = false;
      })
    }
  }

  selectArticle(article: Article) {
    this.selectArticleEvent.emit(article);
  }

  isChecked(article: Article): boolean
  {
    return this.listArticles.filter(item => item.Numero === article.Numero).length > 1;
  }
}
