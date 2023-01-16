import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeakersListComponent } from './home/speakers/speakers-list/speakers-list.component';
import { SpeakersItemComponent } from './home/speakers/speakers-item/speakers-item.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { VenueComponent } from './home/venue/venue.component';
import { PricingListComponent } from './home/pricing/pricing-list/pricing-list.component';
import { PricingItemComponent } from './home/pricing/pricing-item/pricing-item.component';
import { ScheduleComponent } from './home/schedule/schedule.component';
import { BannerComponent } from './home/banner/banner.component';
import { BlogComponent } from './home/blog/blog.component';
import { SponsorsComponent } from './home/sponsors/sponsors.component';
import { IntroListComponent } from './home/intro/intro-list/intro-list.component';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './home/details/details.component';
import { IntroCardComponent } from './home/intro/intro-card/intro-card.component';
import { NavBarComponent } from './admin/layout/nav-bar/nav-bar.component';
import { SideBarComponent } from './admin/layout/side-bar/side-bar.component';
import { AdminScheduleComponent } from './admin/pages/admin-schedule/admin-schedule.component';
import { AdminAboutComponent } from './admin/pages/admin-about/admin-about.component';
import { AdminContactComponent } from './admin/pages/admin-contact/admin-contact.component';
import { AdminBannerComponent } from './admin/pages/admin-banner/admin-banner.component';
import { AdminBlogComponent } from './admin/pages/admin-blog/admin-blog.component';
import { AdminDetailsComponent } from './admin/pages/admin-details/admin-details.component';
import { AdminIntroComponent } from './admin/pages/admin-intro/admin-intro.component';
import { AdminPricingComponent } from './admin/pages/admin-pricing/admin-pricing.component';
import { AdminSpeakersComponent } from './admin/pages/admin-speakers/admin-speakers.component';
import { AdminFooterComponent } from './admin/layout/admin-footer/admin-footer.component';
import { AdminBaseLayoutComponent } from './admin/layout/admin-base-layout/admin-base-layout.component';
import { AdminSponsorsComponent } from './admin/pages/admin-sponsors/admin-sponsors.component';
import { AdminVenueComponent } from './admin/pages/admin-venue/admin-venue.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ROUTING } from './app.routing';
import { AdminDashboardComponent } from './admin/pages/admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin/pages/admin-profile/admin-profile.component';
import { AdminCalendarComponent } from './admin/pages/admin-calendar/admin-calendar.component';
@NgModule({
    declarations: [
        AppComponent,
        SpeakersListComponent,
        SpeakersItemComponent,
        AboutComponent,
        ContactComponent,
        VenueComponent,
        PricingListComponent,
        PricingItemComponent,
        ScheduleComponent,
        BannerComponent,
        BlogComponent,
        SponsorsComponent,
        IntroListComponent,
        HeaderComponent, 
        FooterComponent, DetailsComponent, IntroCardComponent, NavBarComponent, SideBarComponent, AdminScheduleComponent, AdminAboutComponent, AdminContactComponent, AdminBannerComponent, AdminBlogComponent, AdminDetailsComponent, AdminIntroComponent, AdminPricingComponent, AdminSpeakersComponent, AdminFooterComponent, AdminBaseLayoutComponent, AdminSponsorsComponent, AdminVenueComponent, AdminDashboardComponent, AdminProfileComponent, AdminCalendarComponent

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ROUTING

    ],
  
})
export class AppModule { }
