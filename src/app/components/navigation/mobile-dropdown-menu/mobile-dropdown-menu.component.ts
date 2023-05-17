import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-dropdown-menu',
  templateUrl: './mobile-dropdown-menu.component.html',
  styleUrls: ['./mobile-dropdown-menu.component.scss']
})
export class MobileDropdownMenuComponent implements OnInit {
  isMenuOpen: boolean = false;
  
  ngOnInit(): void {
    this.isMenuOpen = false;
  }
}
