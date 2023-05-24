import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChildren('feature') featureItem!: QueryList<ElementRef>;

  featureData = [
    {
      feature: 'all',
      img: '/assets/images/home_page_one.avif',
      info: ['Merging retail, food, art, and culture, Grand Street Market highlights top retail and design concepts, restaurants, and up-and-coming players in the downtown New York City community.']
    },

    {
      feature: 'retail',
      img: '/assets/images/home_page_two.avif',
      info: ['Retail Market Hours:', 'Fri–Sun: 11:00AM - 7:00PM']
    },
    {
      feature: 'food',
      img: '/assets/images/home_page_three.avif',
      info: ['Food Hall Hours:', 'Mon–Sun: 11:00AM - 8:00PM']
    }
  ]

  events = [
    { date: '12/02', event: 'Small Business Retail Pop Up Weekend!' },
    { date: '02/07', event: 'New Balance x Paperboy Paris by Greenhouse @ Grand Street Market' },
    { date: '12/11', event: 'Hack City 12/11' }
  ]


  constructor() { }
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger, Draggable);

    setTimeout(() => {
      this.revealFeatureImagesOnScroll();
    }, 100)

  }

  revealFeatureImagesOnScroll() {
    const features = this.featureItem.map((feature) => feature.nativeElement);
    features.forEach((container) => {
      const scrollContainer = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top center',
          toggleActions: 'play none none reverse',
        }
      });
      scrollContainer.from(container, { y: 0, opacity: 0, duration: 1.5, scrub: true });
    })
  }
}
