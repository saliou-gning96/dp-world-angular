import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../../../models/article';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {

  @Input() listArticles: Article[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
