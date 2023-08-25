import { Component, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

import { eventDetail } from 'src/app/models/events.model';
import { featureDetail } from 'src/app/models/features.model';
import { podcastDetail } from 'src/app/models/podcasts.model';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html'
})
export class CommunityComponent implements OnInit {
  communityInfo$!: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadEventsFeaturesAndPodcasts();
  }

  loadEventsFeaturesAndPodcasts() {

    const communityInfo = this.dataService.loadCommunityInfo().pipe(
      map(res => res
      ));

    this.communityInfo$ = communityInfo;
  }
}
