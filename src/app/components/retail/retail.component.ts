import { Component } from '@angular/core';
import { retailVendors } from './retail-vendors.model';

@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.scss']
})
export class RetailComponent {
  retailVendors =  retailVendors;
}
