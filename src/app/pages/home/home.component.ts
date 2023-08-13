import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { EVENTLIST } from 'server/db-data';
import { eventDetail } from 'src/app/models/events.model';
import { marketFeature } from 'src/app/models/market-features.model';
import { MARKETFEATURES } from './market-features.data';
import { DataService } from 'src/app/services/data.service';
import { Observable, map, tap } from 'rxjs';

gsap.registerPlugin(ScrollTrigger, Draggable);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChildren('feature') featureItem!: QueryList<ElementRef>;

  marketFeature: marketFeature[] = MARKETFEATURES;

  // events: eventDetail[] = EVENTLIST.slice(0, 3)

vendors!: Observable<any>;
  constructor(private dataService: DataService) { }


  ngOnInit(): void {

this.loadVendors()
    setTimeout(() => {
      this.revealFeatureImagesOnScroll();
    }, 100)
  }
loadVendors(){
  const vendors = this.dataService.loadFoodVendors().pipe(
    map(res=> res),
    tap(val => console.log(val))
  );
  this.vendors = vendors;


     
  
console.log(this.vendors);
}
  revealFeatureImagesOnScroll() {
    const features = this.featureItem.map((feature) => feature.nativeElement);
    console.log(this.featureItem)

    features.forEach((container) => {
      const scrollContainer = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top center',
          toggleActions: 'play none none reverse',
        }
      });
      scrollContainer.from(container, { y: 0, opacity: 0, duration: 1.5 });
    })
  }
}
