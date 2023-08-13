import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDigitalDash]'
})
export class DigitalDashDirective implements OnInit {



  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    this.initDigDashAnim();

  }


  initDigDashAnim() {

    // this.el.nativeElement.style.backgroundImage = 'linear-gradient(90deg, $black-hole 50 %, transparent 0), linear-gradient(90deg, $black-hole 50 %, transparent 0)';
    // this.el.nativeElement.style.backgroundPosition = '0 100 %, 0 calc(100 %-14px)';
    // this.el.nativeElement.style.backgroundRepeat = 'repeat-x, repeat-x';
    // this.el.nativeElement.style.backgroundSize = '24px 1px, 24px 1px';
    // this.el.nativeElement.style.opacity = '1';
    // animate('400ms ease-in', style({ opacity: 1 })),
  }


}
