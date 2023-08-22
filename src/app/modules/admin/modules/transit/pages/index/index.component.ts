import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transit } from '../../../../models/transit';
import { TransitService } from '../../services/transit/transit.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  isLoading = true;
  public listTransit: Transit[] = [];
  constructor(
    private transitService: TransitService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.transitService.getTranssitFolder().subscribe((data: any) => {
      this.listTransit = data;
      this.isLoading = false;
    })
  }

  gotoDetail(transit: Transit) {
    this.router.navigate([`detail/${transit.Numero}`], { relativeTo: this.route });
  }

}
