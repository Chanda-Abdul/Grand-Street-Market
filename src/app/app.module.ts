import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FoodComponent } from './components/food/food.component';
import { RetailComponent } from './components/retail/retail.component';
import { CommunityComponent } from './components/community/community.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { VendorSignUpComponent } from './components/vendor-sign-up/vendor-sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { MobileDropdownMenuComponent } from './components/navigation/mobile-dropdown-menu/mobile-dropdown-menu.component';
import { DesktopVerticalMenuComponent } from './components/navigation/desktop-vertical-menu/desktop-vertical-menu.component';
import { AboutComponent } from './components/about/about.component';
import { FeatureComponent } from './components/community/feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodComponent,
    RetailComponent,
    CommunityComponent,
    NavigationComponent,
    VendorSignUpComponent,
    FooterComponent,
    MobileDropdownMenuComponent,
    DesktopVerticalMenuComponent,
    AboutComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
