import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  heroImage: string = '/assets/images/home-hero.avif';

  @ViewChild('reveal', { static: true }) reveal!: ElementRef<HTMLElement>

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.revealImageOnScroll();
  }

  revealImageOnScroll() {
    const scrollContainer = gsap.timeline({
      scrollTrigger: {
        trigger: this.reveal.nativeElement,
        start: 'top center',
        toggleActions: 'play none none reverse',
      }
    })
    scrollContainer.from(this.reveal.nativeElement, { y: 0, opacity: 0, duration: 1.5, scrub: true });
  }
}
