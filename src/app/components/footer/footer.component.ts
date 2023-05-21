import { Component} from '@angular/core';
import { socialList } from './socials.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
socials = socialList;

currentYear = new Date().getFullYear();
}
