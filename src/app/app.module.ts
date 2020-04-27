import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { BlogpostsComponent } from './components/blogposts/blogposts.component';
import { BlogpostdetailsComponent } from './components/blogpostdetails/blogpostdetails.component';
import { FooterComponent } from './components/footer/footer.component';
import { FrontendNavbarComponent } from './components/frontend-navbar/frontend-navbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogpostsComponent,
    BlogpostdetailsComponent,
    FrontendNavbarComponent,
    FooterComponent,
    HeroSectionComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
