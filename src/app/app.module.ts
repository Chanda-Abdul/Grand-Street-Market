import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FoodComponent } from './pages/food/food.component';
import { RetailComponent } from './pages/retail/retail.component';
import { CommunityComponent } from './pages/community/community.component';
import { NavigationComponent } from './pages/home/navigation/navigation.component';
import { VendorSignUpComponent } from './components/vendor-sign-up/vendor-sign-up.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { MobileDropdownMenuComponent } from './pages/home/navigation/mobile-dropdown-menu/mobile-dropdown-menu.component';
import { DesktopVerticalMenuComponent } from './pages/home/navigation/desktop-vertical-menu/desktop-vertical-menu.component';
import { FeatureComponent } from './pages/community/feature/feature.component';
import { EventComponent } from './pages/community/event/event.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';

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
    FeatureComponent,
    EventComponent,
    HeaderComponent,
    CallToActionComponent
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
