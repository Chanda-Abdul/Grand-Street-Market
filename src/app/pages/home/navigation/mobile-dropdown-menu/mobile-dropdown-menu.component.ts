import { Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { social } from '../../../../models/socials.model';
import { SOCIALLIST } from '../../social.data';

@Component({
  selector: 'app-mobile-dropdown-menu',
  templateUrl: './mobile-dropdown-menu.component.html',
  styleUrls: ['./mobile-dropdown-menu.component.scss']
})
export class MobileDropdownMenuComponent implements OnInit {
  socials:social[] = SOCIALLIST;
  links: string[] = ['about', 'food', 'retail', 'community']
  isMenuOpen: boolean = false;

  constructor() { }
  ngOnInit(): void {
    this.isMenuOpen = false;

  }

}
