import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LandingComponent } from './main-content/landing/landing.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { PracticeCssComponent } from './practice-css/practice-css.component';
import { MenubarComponent } from './menubar/menubar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    LandingComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    PracticeCssComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
