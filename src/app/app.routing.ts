import { RouterModule, Routes } from "@angular/router";
import { AdminAboutComponent } from "./admin/pages/admin-about/admin-about.component";
import { AdminBannerComponent } from "./admin/pages/admin-banner/admin-banner.component";
import { AdminBlogComponent } from "./admin/pages/admin-blog/admin-blog.component";
import { AdminCalendarComponent } from "./admin/pages/admin-calendar/admin-calendar.component";
import { AdminContactComponent } from "./admin/pages/admin-contact/admin-contact.component";
import { AdminDashboardComponent } from "./admin/pages/admin-dashboard/admin-dashboard.component";
import { AdminDetailsComponent } from "./admin/pages/admin-details/admin-details.component";
import { AdminIntroComponent } from "./admin/pages/admin-intro/admin-intro.component";
import { AdminPricingComponent } from "./admin/pages/admin-pricing/admin-pricing.component";
import { AdminProfileComponent } from "./admin/pages/admin-profile/admin-profile.component";
import { AdminScheduleComponent } from "./admin/pages/admin-schedule/admin-schedule.component";
import { AdminSpeakersComponent } from "./admin/pages/admin-speakers/admin-speakers.component";
import { AdminSponsorsComponent } from "./admin/pages/admin-sponsors/admin-sponsors.component";
import { AdminVenueComponent } from "./admin/pages/admin-venue/admin-venue.component";



const APP_ROUTING : Routes = [
    {path:'',component:AdminDashboardComponent},

    {path:'admin',children :[
        {path:'dashboard',component:AdminDashboardComponent}, 
        {path:'calendar',component:AdminCalendarComponent}, 
        {path:'profile',component:AdminProfileComponent}, 

        {path:'about',component:AdminAboutComponent}, 
        {path:'contact',component:AdminContactComponent}, 
        {path:'banner',component:AdminBannerComponent}, 
        {path:'blog',component:AdminBlogComponent}, 
        {path:'details',component:AdminDetailsComponent}, 
        {path:'schedule',component:AdminScheduleComponent},
        {path:'pricing',component:AdminPricingComponent}, 
        {path:'speakers',component:AdminSpeakersComponent}, 
        {path:'intro',component:AdminIntroComponent}, 
        {path:'venue',component:AdminVenueComponent}, 

        {path:'sponsors',component:AdminSponsorsComponent}, 


    ]}, 



]    

export const ROUTING = RouterModule.forRoot(APP_ROUTING) ; 