import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppMaterialModule } from './app-material/app-material.module';
import { SerachMapComponent } from './serach-map/serach-map.component';
import { SavedPlacesComponent } from './saved-places/saved-places.component';

import { LocationService } from './location.service';

import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SerachMapComponent,
    SavedPlacesComponent
  ],
  imports: [
    AppRoutingModule,
    AppMaterialModule,
    BrowserModule,
    HttpModule
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
