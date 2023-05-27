import { Component} from '@angular/core';
import { socialList } from '../../../models/socials.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
socials = socialList;

currentYear = new Date().getFullYear();
}
