import { Component } from '@angular/core';
import { foodHallVendors } from './food-vendors.model';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent {
  foodHallVendors = foodHallVendors;
}
