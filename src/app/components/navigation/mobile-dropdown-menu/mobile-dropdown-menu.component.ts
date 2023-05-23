import { Component, OnInit } from '@angular/core';
import { socialList } from '../../footer/socials.model';

@Component({
  selector: 'app-mobile-dropdown-menu',
  templateUrl: './mobile-dropdown-menu.component.html',
  styleUrls: ['./mobile-dropdown-menu.component.scss']
})
export class MobileDropdownMenuComponent implements OnInit {
 socials = socialList;
 links: string[] = [ 'about','food','retail','community']

  isMenuOpen: boolean = false;

  ngOnInit(): void {
    this.isMenuOpen = false;
  }
}
