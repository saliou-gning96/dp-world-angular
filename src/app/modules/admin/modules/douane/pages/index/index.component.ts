import { Component, OnInit } from '@angular/core';
import { Douane } from '../../../transit/models/douane';
import { DouaneService } from '../../services/douane.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  isLoading = true;
  public listDouane: Douane[] = [];
  constructor(
    private douaneService: DouaneService
  ) { }

  ngOnInit(): void {
    this.douaneService.getDouaneFolder().subscribe((data: any) => {
      this.listDouane = data;
      this.isLoading = false;
    })
  }

}
