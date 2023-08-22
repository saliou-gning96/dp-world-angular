import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../../../models/article';

@Component({
  selector: 'app-article-quantity',
  templateUrl: './article-quantity.component.html',
  styleUrls: ['./article-quantity.component.scss']
})
export class ArticleQuantityComponent implements OnInit {

  @Input() listArticles: Article[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
