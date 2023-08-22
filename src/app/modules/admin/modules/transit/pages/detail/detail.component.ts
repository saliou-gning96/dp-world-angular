import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PO } from '../../../../models/po';
import { Transit } from '../../../../models/transit';
import { TransitService } from '../../services/transit/transit.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  transit: Transit = {};
  po?: PO = undefined;
  isLoading = true;
  id: string|null = ''

  constructor(
    private transitService: TransitService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.transitService.getOneTranssit(this.id).subscribe((data: any) => {
      this.transit = data;
      this.isLoading = false;

      if (this.transit.NumeroPO) {
        this.getPO(this.transit.NumeroPO)
      }
    })
  }

  getPO(numero: string) {
    this.transitService.getOnePO(numero).subscribe((data: any) => {
      this.po = data;
      this.isLoading = false;
    })
  }

}
