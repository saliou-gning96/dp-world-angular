import { Component, OnInit } from '@angular/core';
import { Article } from '../../../transit/models/article';
import { Transit } from '../../../transit/models/transit';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  steps = [
    {
      code: 'transit',
      name: 'Sélectionnez un Dossier transit',
      active: true
    },
    {
      code: 'article',
      name: 'Sélectionner les articles',
      active: false
    },
    {
      code: 'quantity',
      name: 'Renseigner les quantité',
      active: false
    },
    {
      code: 'confirm',
      name: 'Confirmation',
      active: false
    }
  ]

  activeStep = 'transit';

  listTransits: Transit[] = []
  listArticles: Article[] = []

  poNumber: string|undefined = '';

  constructor() { }

  ngOnInit(): void {
  }


  next() {
    switch (this.activeStep) {
      case 'transit':
        this.activeStep = 'article';
        break;
      case 'article':
        this.activeStep = 'quantity';
        break;
      case 'quantity':
        this.activeStep = 'confirm';
        break;
    
      default:
        break;
    }

    this.updateListSteps();
  }

  prev() {
    switch (this.activeStep) {
      case 'confirm':
        this.activeStep = 'quantity';
        break;
      case 'quantity':
        this.activeStep = 'article';
        break;
      case 'article':
        this.activeStep = 'transit';
        break;
    
      default:
        break;
    }

    this.updateListSteps();
  }

  updateListSteps() {
    this.steps = this.steps.map((item) => {
      item.active = false;
      if (item.code === this.activeStep) {
        item.active = true;
      }

      return item;
    })
  }

  selectTransit(transit: Transit) {
    if (this.listTransits.filter(item => item.Numero === transit.Numero).length === 1) {
      this.listTransits = this.listTransits.filter(item => item.Numero !== transit.Numero);

      return;
    }

    this.listTransits.push(transit);

    if (this.listTransits.length) {
      this.poNumber = this.listTransits.map(item => item.NumeroPO).toString()
    }
  }

  selectArticle(article: Article) {
    if (this.listArticles.filter(item => item.Numero === article.Numero).length > 1) {
      this.listArticles = this.listArticles.filter(item => item.Numero !== article.Numero);

      return;
    }

    this.listArticles.push(article);
  }
}
