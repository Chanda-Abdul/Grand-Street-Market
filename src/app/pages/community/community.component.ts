import { Component } from '@angular/core';
import { EVENTLIST, FEATURELIST, PODCASTLIST } from 'server/db-data';
import { eventDetail } from 'src/app/models/events.model';
import { featureDetail } from 'src/app/models/features.model';
import { podcastDetail } from 'src/app/models/podcasts.model';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html'
})
export class CommunityComponent {
  // eventList: eventDetail[] = EVENTLIST;
  // features: featureDetail[] = FEATURELIST;
  // podcasts: podcastDetail[] = PODCASTLIST;
}
