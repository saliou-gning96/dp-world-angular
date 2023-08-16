import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-steper',
  templateUrl: './steper.component.html',
  styleUrls: ['./steper.component.scss']
})
export class SteperComponent implements OnInit {

  @Input() steps = [
    {
      code: 'po',
      name: 'Selectioner un PO',
      active: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
