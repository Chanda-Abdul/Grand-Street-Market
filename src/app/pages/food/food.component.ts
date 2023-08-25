import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { foodVendor } from 'src/app/models/food-vendors.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
})

export class FoodComponent implements OnInit {
  foodHallVendors$!: Observable<foodVendor[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadFoodVendors();
  }

  loadFoodVendors() {
    const vendors = this.dataService.loadFoodVendors().pipe(
      map(res => res));

    this.foodHallVendors$ = vendors;
  }
}
