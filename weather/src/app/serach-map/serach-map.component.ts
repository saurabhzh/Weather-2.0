import { Component, OnInit, ViewChild } from '@angular/core';

import { FormControl } from '@angular/forms';
import { } from '@types/googlemaps';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-serach-map',
  templateUrl: './serach-map.component.html',
  styleUrls: ['./serach-map.component.css']
})
export class SerachMapComponent implements OnInit {
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  searchTimeout;
  myControl: FormControl = new FormControl();
  options = [
    'One',
    'Two',
    'Three'
  ];
  constructor(private locaionService: LocationService) {
  }

  searchClients(asdf) {
    console.log(asdf);
  }

  onSearchChange(searchText) {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(function () {
      this.options = ['wuai'];
    }, 500);
  }

  ngOnInit() {
    this.locaionService.getWeatherData('22', '68').then(function(r) {
      console.log(r);
    }).catch(function(e) {
      console.log(e);
    });
    const mapProp = {
      center: new google.maps.LatLng(28, 77),
      zoom: 5,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp);
  }
}
