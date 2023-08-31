import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunityComponent } from './components/community/community.component';
import { EventComponent } from './components/community/event/event.component';
import { FeatureComponent } from './components/community/feature/feature.component';
import { FoodComponent } from './components/food/food.component';
import { HomeComponent } from './components/home/home.component';
import { RetailComponent } from './components/retail/retail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'food', component: FoodComponent,
  },
  {
    path: 'retail', component: RetailComponent,
  },
  {
    path: 'community', component: CommunityComponent,
    children: [
      {
        path: 'event',
        component: EventComponent,
      },
      {
        path: 'feature',
        component: FeatureComponent
      },
    ],
  },

  // {
  //   path: 'become-a-vendor', component: VendorSignUpComponent,
  // },
  /* wildcard route */
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

