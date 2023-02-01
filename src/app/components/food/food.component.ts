import { Component } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent {
  foodHallVendors = [
    { menuFeatureItem: 'Khao Man Gai', vendorName: 'Betong' },
    { menuFeatureItem: 'Coffee, Pastries & Smoothies', vendorName: 'Chinatown Deli' },
    { menuFeatureItem: 'Artisanal Chocolates', vendorName: ' Daniel Corpuz Chocolatier' },
    { menuFeatureItem: 'Napoli Style Pizza', vendorName: 'Enzo Bruni La Pizza Gourmet' },
    { menuFeatureItem: 'Chinese Classics', vendorName: "Joe's Rice and Noodles" }, { menuFeatureItem: 'Cantonese Steamed Rice Rolls', vendorName: "Joe's Steam Rice Roll" },
    { menuFeatureItem: 'Delicious Filipino Classics', vendorName: 'Kabisera' },
    { menuFeatureItem: 'Bingsoo Sundaes & Bubble Tea', vendorName: 'Lazy Sundaes' },
    { menuFeatureItem: 'Sushi, Handrolls & Chirashi', vendorName: 'Mastunori' },
    { menuFeatureItem: 'Filipino Inspired Taqueria', vendorName: 'Mucho Sarap' },
  ]
}
