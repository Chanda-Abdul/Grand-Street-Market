import { Component, OnInit } from '@angular/core';
import { eventDetail } from 'src/app/models/events.model';
import { marketFeature } from 'src/app/models/market-features.model';
import { MARKETFEATURES } from './market-features.data';
import { DataService } from 'src/app/services/data.service';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  heroImage: string = '/assets/images/home-hero.avif';

  marketFeature: marketFeature[] = MARKETFEATURES;

  events!: Observable<eventDetail[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    const events = this.dataService.loadCommunityInfo()
      .pipe(
        map(res => res.recentEvents)
      );

    this.events = events;
  }

}
