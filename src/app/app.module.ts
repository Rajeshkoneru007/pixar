import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';



import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryStatesService }  from '../assets/InMemoryWebApi/in-memory-states.service';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';



import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryStatesService, { dataEncapsulation: false },
    ),
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
