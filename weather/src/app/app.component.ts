import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  routes = [];
  constructor() {
    this.routes = [
      { label: 'DashBoard', path: 'dashboard' },
      { label: 'Search', path: 'mapSearch' },
      { label: 'Favorites', path: 'savedPlaces' }
    ];
  }
}
