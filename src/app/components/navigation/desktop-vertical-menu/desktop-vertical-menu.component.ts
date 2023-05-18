import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-vertical-menu',
  templateUrl: './desktop-vertical-menu.component.html',
  styleUrls: ['./desktop-vertical-menu.component.scss']
})
export class DesktopVerticalMenuComponent implements OnInit {
  selectedPanel: string = 'link-home';
  homePanelActive = true;
  foodPanelActive = false;
  retailPanelActive = false;
  communityPanelActive = false;

  ngOnInit(): void {
    this.selectedPanel = 'link-home';
    this.toggleClass();

  }
  toggleClass() {
    this.selectedPanel === 'link-home' ? this.homePanelActive = true : this.homePanelActive = false;
    this.selectedPanel === 'link-food' ? this.foodPanelActive = true : this.foodPanelActive = false;
    this.selectedPanel === 'link-retail' ? this.retailPanelActive = true : this.retailPanelActive = false;
    this.selectedPanel === 'link-community' ? this.communityPanelActive = true : this.communityPanelActive = false;

  }
  handleMenuSelection(link: string): void {
    this.selectedPanel = `link-${link}`;
    this.toggleClass()

  }


}
