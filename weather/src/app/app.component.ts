import { Component } from '@angular/core';

import { LocationService } from './location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  routes = [];
  constructor(private locaionService: LocationService) {
    this.routes = [
      { label: 'DashBoard', path: 'dashboard' },
      { label: 'Search', path: 'mapSearch' },
      { label: 'Favorites', path: 'savedPlaces' }
    ];
    locaionService.getCurrentLocation();
  }
}
