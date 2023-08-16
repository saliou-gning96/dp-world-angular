import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Transit } from '../../../transit/models/transit';
import { DouaneService } from '../../services/douane.service';

@Component({
  selector: 'app-list-transit',
  templateUrl: './list-transit.component.html',
  styleUrls: ['./list-transit.component.scss']
})
export class ListTransitComponent implements OnInit {

  @Input() listTransits: Transit[] = [];
  @Output() selectTransiteEvent = new EventEmitter<Transit>();
  isLoading = false;
  listTransit: Transit[] = [];

  listDepartment: Observable<any> = new Observable()
  selectedDepartment: string|null = null;

  constructor(
    private douaneService: DouaneService
  ) { }

  ngOnInit(): void {
    this.douaneService.getTranssitFolder().subscribe((data: any) => {
      this.listTransit = data;
      this.isLoading = false;
    })

    this.listDepartment = this.douaneService.getListDepartment();
  }

  search() {
    this.listTransit = [];
    this.isLoading = true
    
    this.douaneService.getTranssitFolder({departement: this.selectedDepartment}).subscribe((data: any) => {
      this.listTransit = data;
      this.isLoading = false;
    })
  }

  isChecked(transit: Transit): boolean
  {
    return this.listTransits.filter(item => item.Numero === transit.Numero).length === 1;
  }

  selectTransit(transit: Transit) {
    this.selectTransiteEvent.emit(transit);
  }
}
