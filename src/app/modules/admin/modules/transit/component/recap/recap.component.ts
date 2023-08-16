import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { PO } from '../../models/po';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {

  @Input() listArticles: Article[] = [];
  @Input() po: PO|null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
