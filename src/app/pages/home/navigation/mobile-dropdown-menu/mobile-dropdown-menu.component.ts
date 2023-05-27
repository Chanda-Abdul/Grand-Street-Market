import { Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { socialList } from '../../../../models/socials.model';


@Component({
  selector: 'app-mobile-dropdown-menu',
  templateUrl: './mobile-dropdown-menu.component.html',
  styleUrls: ['./mobile-dropdown-menu.component.scss']
})
export class MobileDropdownMenuComponent implements OnInit {
  socials = socialList;
  links: string[] = ['about', 'food', 'retail', 'community']
  isMenuOpen: boolean = false;

  constructor() { }
  ngOnInit(): void {
    this.isMenuOpen = false;

  }

}
