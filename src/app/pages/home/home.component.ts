import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { eventList } from 'src/app/models/events.model';
import { marketFeatures } from 'src/app/models/market-features.model';


gsap.registerPlugin(ScrollTrigger, Draggable);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChildren('feature') featureItem!: QueryList<ElementRef>;

  marketFeature = marketFeatures;

  events = eventList.slice(0, 3)


  constructor() { }
  ngOnInit(): void {


    setTimeout(() => {
      this.revealFeatureImagesOnScroll();
    }, 100)
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
      scrollContainer.from(container, { y: 0, opacity: 0, duration: 1.5});
    })
  }
}
