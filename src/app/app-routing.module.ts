import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunityComponent } from './pages/community/community.component';
import { EventComponent } from './pages/community/event/event.component';
import { FeatureComponent } from './pages/community/feature/feature.component';
import { FoodComponent } from './pages/food/food.component';
import { HomeComponent } from './pages/home/home.component';
import { RetailComponent } from './pages/retail/retail.component';
import { VendorSignUpComponent } from './components/vendor-sign-up/vendor-sign-up.component';

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

  {
    path: 'become-a-vendor', component: VendorSignUpComponent,
  },
  /* wildcard route */
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

