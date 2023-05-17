import { Component } from '@angular/core';
import { eventList } from './events.model';
import { featureList } from './features.model';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent {

  eventList = eventList;

  features = featureList;
}
