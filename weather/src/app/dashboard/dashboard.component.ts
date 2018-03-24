import { Component, OnInit } from '@angular/core';

import { LocationService } from '../location.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loaderBool = false;
  weatherData;

  constructor(private locaionService: LocationService) { }

  ngOnInit() {
    this.loaderBool = true;
    this.locaionService.getCurrentLocation().then(r => {
      this.locaionService.getWeatherData(r.coords.latitude, r.coords.longitude).then(re => {
      // this.locaionService.getWeatherData('28.641478', '77.226826').then(re => {
        this.loaderBool = false;
        this.weatherData = JSON.parse(re['_body']);
        console.log(JSON.parse(re['_body']));
      }).catch(e => {
        console.log(e);
      });
    }).catch(e => {
      this.loaderBool = false;
      console.log(e);
    });
  }

}
