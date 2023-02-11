import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FullCalendarModule } from '@fullcalendar/angular';

import { CalendarCardComponent } from './components/calendar/calendar-card/calendar-card.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaskDirective } from './directives/mask.directives';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { SideNavService } from './services/sidenav.service';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';
import { SideNavPageComponent } from './pages/master/sidenav-frame/sidenav-frame.component';



@NgModule({
  declarations: [
    AppComponent,
    CalendarCardComponent,
    DatePickerComponent,
    NavbarComponent,
    HomePageComponent,
    MaskDirective,
    SideNavPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatGridListModule,
    MatSidenavModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    
  ],
  providers: [SideNavService, MatDatepickerModule, MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule {  }
