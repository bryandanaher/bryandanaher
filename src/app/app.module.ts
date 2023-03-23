import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LandingComponent } from './main-content/landing/landing.component';
import { MenubarComponent } from './main-content/menubar/menubar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageInfoComponent } from './main-content/page-info/page-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    LandingComponent,
    MenubarComponent,
    PageInfoComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
