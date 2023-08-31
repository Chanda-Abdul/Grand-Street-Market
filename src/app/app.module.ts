import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FoodComponent } from './components/food/food.component';
import { RetailComponent } from './components/retail/retail.component';
import { CommunityComponent } from './components/community/community.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeatureComponent } from './components/community/feature/feature.component';
import { EventComponent } from './components/community/event/event.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';

import { DigitalDashDirective } from './directives/digital-dash.directive';
import { YellowZigZagUnderlineDirective } from './directives/yellow-zig-zag-underline.directive';
import { ZigZagBorderInfiniteDirective } from './directives/zig-zag-border-infinite.directive';
import { RepeatingSlashesStaticDirective } from './directives/repeating-slashes-static.directive';
import { BounceBounceDirective } from './directives/bounce-bounce.directive';
import { AppearOnScrollDirective } from './directives/appear-on-scroll.directive';
import { VendorFormComponent } from './components/vendor-form/vendor-form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MobileDropdownMenuComponent } from './components/navigation/mobile-dropdown-menu/mobile-dropdown-menu.component';
import { DesktopVerticalMenuComponent } from './components/navigation/desktop-vertical-menu/desktop-vertical-menu.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodComponent,
    RetailComponent,
    CommunityComponent,
    NavigationComponent,
    VendorFormComponent,
    FooterComponent,
    MobileDropdownMenuComponent,
    DesktopVerticalMenuComponent,
    FeatureComponent,
    EventComponent,
    HeaderComponent,
    CallToActionComponent,
    DigitalDashDirective,
    YellowZigZagUnderlineDirective,
    ZigZagBorderInfiniteDirective,
    RepeatingSlashesStaticDirective,
    BounceBounceDirective,
    AppearOnScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
