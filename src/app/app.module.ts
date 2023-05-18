import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FoodComponent } from './components/food/food.component';
import { RetailComponent } from './components/retail/retail.component';
import { CommunityComponent } from './components/community/community.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { VendorSignUpComponent } from './components/vendor-sign-up/vendor-sign-up.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileDropdownMenuComponent } from './components/navigation/mobile-dropdown-menu/mobile-dropdown-menu.component';
import { DesktopVerticalMenuComponent } from './components/navigation/desktop-vertical-menu/desktop-vertical-menu.component';
import { AboutComponent } from './components/about/about.component';
import { FeatureComponent } from './components/community/feature/feature.component';
import { EventComponent } from './components/community/event/event.component';
import { HeaderComponent } from './components/home/header/header.component';

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
    FeatureComponent,
    EventComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
