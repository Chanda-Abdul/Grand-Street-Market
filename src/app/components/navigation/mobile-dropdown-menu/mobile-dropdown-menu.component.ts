import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-dropdown-menu',
  templateUrl: './mobile-dropdown-menu.component.html',
  styleUrls: ['./mobile-dropdown-menu.component.scss']
})
export class MobileDropdownMenuComponent {
  menuOpen = false;
  toggleDesktopMenu(){
    this.menuOpen = !this.menuOpen;
  }
}
