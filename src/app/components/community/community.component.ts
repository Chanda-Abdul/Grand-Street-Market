import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent {
  features = [
    { feature: 'CSM Community - AMDC', img: '/assets/images/feature-AMDC.avif' },
    { feature: "CSM Community - Joe's Steam Rice Rolls ", img: '/assets/images/feature-joes.avif' },
    { feature: 'CSM Community - Bereop Tech', img: '/assets/images/feature-bereop.avif' },
    { feature: 'CSM Community - Izakaya', img: '/assets/images/feature-izakaya.avif' },
  ]
}
