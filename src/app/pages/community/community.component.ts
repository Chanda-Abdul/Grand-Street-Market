import { Component } from '@angular/core';
import { eventList } from '../../models/events.model';
import { featureList } from '../../models/features.model';
import { podcastList } from '../../models//podcasts.model';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent {
  eventList = eventList;
  features = featureList;
  podcasts = podcastList;
}
