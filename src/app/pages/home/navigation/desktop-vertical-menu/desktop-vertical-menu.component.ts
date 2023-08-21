import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-vertical-menu',
  templateUrl: './desktop-vertical-menu.component.html',
})

export class DesktopVerticalMenuComponent implements OnInit {
  panelLinks = [
    {
      panel: 'about',
      orientation: 'left',
      linkTo: '/',
      topContent: '',
      middleTabContent: 'About',
    },
    {
      panel: 'food',
      orientation: 'right',
      linkTo: '/food',
      topContent: '餐饮',
      middleTabContent: 'food',
    },
    {
      panel: 'retail',
      orientation: 'right',
      linkTo: '/retail',
      topContent: '購物',
      middleTabContent: 'Retail',
    },
    {
      panel: 'community',
      orientation: 'right',
      linkTo: '/community',
      topContent: '文化',
      middleTabContent: 'Community',
    },
  ];

  selectedPanel!: string;

  ngOnInit(): void {
    this.selectedPanel = 'about';

  }

  togglePanel(selected: string) {
// TO-DO => check route
    this.selectedPanel = selected;

    switch (this.selectedPanel) {
      case 'about':
        this.panelLinks[1].orientation = 'right';
        this.panelLinks[2].orientation = 'right';
        this.panelLinks[3].orientation = 'right';

        break;
      case 'food':

        this.panelLinks[1].orientation = 'left';
        this.panelLinks[2].orientation = 'right';
        this.panelLinks[3].orientation = 'right';
        break;
      case 'retail':

        this.panelLinks[1].orientation = 'left';
        this.panelLinks[2].orientation = 'left';
        this.panelLinks[3].orientation = 'right';
        break;
      case 'community':
        console.log('community selected');
        this.panelLinks[1].orientation = 'left';
        this.panelLinks[2].orientation = 'left';
        this.panelLinks[3].orientation = 'left';
        break;
      default:

        break;
    }
  }
}
