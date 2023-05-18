import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isMobileView = true;

  ngOnInit(): void {
    this.checkViewport();
    window.addEventListener('resize', this.checkViewport.bind(this));

  }

  checkViewport(): void {
    this.isMobileView = window.innerWidth <= 768;
  }
}
