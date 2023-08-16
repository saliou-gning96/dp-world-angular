import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PO } from '../../models/po';
import { TransitService } from '../../services/transit/transit.service';

@Component({
  selector: 'app-list-po',
  templateUrl: './list-po.component.html',
  styleUrls: ['./list-po.component.scss']
})
export class ListPoComponent implements OnInit {

  @Input() selectedPO: PO|null = null;
  @Output() selectPOEvent = new EventEmitter<PO>();

  isLoading = false;
  public listPO: PO[] = [];

  listDepartment: Observable<any> = new Observable()
  selectedDepartment: string|null = null;

  listVendor: Observable<any> = new Observable()
  selectedVendor: string|null = null;

  constructor(
    private transitService: TransitService
  ) { }

  ngOnInit(): void {
    this.listDepartment = this.transitService.getListDepartment();
    this.listVendor = this.transitService.getListVendor();
  }

  private getListPO(params = {departement: 'IT'}) {
    this.isLoading = true
    this.transitService.getListPOByDepartment(params).subscribe((data: any) => {
      this.listPO = data;
      this.isLoading = false;
    })
  }

  search() {
    this.listPO = [];
    this.isLoading = true
    if (null !== this.selectedDepartment && null !== this.selectedVendor) {
      this.transitService.getListPOByDepartmentAndVendor({departement: this.selectedDepartment, vendor: this.selectedVendor}).subscribe((data: any) => {
        this.listPO = data;
        this.isLoading = false;
      })

      return;
    }

    if (null !== this.selectedDepartment) {
      this.transitService.getListPOByDepartment({departement: this.selectedDepartment}).subscribe((data: any) => {
        this.listPO = data;
        this.isLoading = false;
      })

      return;
    }
  }
  
  selectPO(po: PO) {
    this.selectPOEvent.emit(po);
  }
}
