import { Component} from '@angular/core';
import { social } from 'src/app/models/socials.model';
import { SOCIALLIST } from '../social.data';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
socials: social[] = SOCIALLIST;

currentYear = new Date().getFullYear();
}
