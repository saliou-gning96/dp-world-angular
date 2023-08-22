import { Component, OnInit } from '@angular/core';
import { Article } from '../../../../models/article';
import { PO } from '../../../../models/po';
import { TransitService } from '../../services/transit/transit.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  steps = [
    {
      code: 'po',
      name: 'Selectioner un PO',
      active: true
    },
    {
      code: 'article',
      name: 'Sélectionner les articles',
      active: false
    },
    {
      code: 'justif',
      name: 'Pièce Justificatif',
      active: false
    },
    {
      code: 'confirm',
      name: 'Confirmation',
      active: false
    }
  ]

  activeStep = 'po';

  selectedPO: PO|null = null;
  listArticles: Article[] = []

  constructor(
    private transitService: TransitService
  ) { }

  ngOnInit(): void {
  }

  next() {
    switch (this.activeStep) {
      case 'po':
        this.activeStep = 'article';
        break;
      case 'article':
        this.activeStep = 'justif';
        break;
      case 'justif':
        this.activeStep = 'confirm';
        break;
      case 'confirm':
        this.postForm()
        break;
    
      default:
        break;
    }

    this.updateListSteps();
  }

  prev() {
    switch (this.activeStep) {
      case 'confirm':
        this.activeStep = 'justif';
        break;
      case 'justif':
        this.activeStep = 'article';
        break;
      case 'article':
        this.activeStep = 'po';
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

  selectPO(po: PO) {
    this.selectedPO = po;
  }

  selectArticle(article: Article) {
    if (this.listArticles.filter(item => item.Numero === article.Numero).length === 1) {
      this.listArticles = this.listArticles.filter(item => item.Numero !== article.Numero);

      return;
    }

    this.listArticles.push(article);
  }

  postForm()
  {
    const data = {
      Number: this.selectedPO?.Number,
      UserId: localStorage.getItem('userId'),
      ListPurchaseOrderLine: this.listArticles.map(item => item.Numero)
    }
    
    this.transitService.postTransit(data).subscribe((data) => {
      console.log(data)
    })
  }
}
