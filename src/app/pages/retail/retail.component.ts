import { Component, OnInit } from '@angular/core';
import { retailVendor } from '../../models/retail-vendors.model';
import { Observable, map } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html'
})

export class RetailComponent implements OnInit {
  retailVendors$!: Observable<retailVendor[]>;

  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
    this.loadRetailVendors();
  }

  loadRetailVendors() {
    const vendors$ = this.dataService.loadRetailVendors().pipe(
      map(res => res));

    this.retailVendors$ = vendors$;
  }
}

