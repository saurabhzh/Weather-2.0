import { Injectable } from '@angular/core';

import { } from '@types/googlemaps';
import { Location } from './location';
import { Http } from '@angular/http';

@Injectable()
export class LocationService {
  openWeatherAppID = '64718856662a2ec41db7fec64a482a8b';
  openWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather';
  constructor(private http: Http) {
  }
  getCurrentLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      const geoSuccess = function (position) {
        resolve(position);
      };
      const geoError = function (error) {
        switch (error.code) {
          case error.TIMEOUT:
            reject('Error timeout');
            break;
        }
      };
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    });
  }

  textSearch(location): Promise<any> {
    return new Promise((resolve, reject) => {
      const delhi = new google.maps.LatLng(28, 77);
      const map = new google.maps.Map(document.getElementById('map'), {
        center: delhi,
        zoom: 15,
      });
      const service = new google.maps.places.PlacesService(map);
      const request = {
        location: delhi,
        radius: 5000000,
        query: location
      };
      service.textSearch(request, function(result, status) {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          console.error(status);
          reject(status);
        }
        resolve(result);
      });
    });
  }

  getWeatherData(lat, lng) {
    return this.http.get(this.openWeatherUrl + '?lat=' + lat + '&lon=' + lng + '&APPID=' + this.openWeatherAppID).toPromise();
  }

  // parseLocation(lat, long): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     const latlng = { lat: parseFloat(lat), lng: parseFloat(long) };
  //     this.geoCoder.geocode({ 'location': latlng }, function (results, status) {
  //       if (status === 'OK') {
  //         const loc: Location = {
  //           id: 0,
  //           name: results[0].address_components[results[0].address_components.length - 5].long_name,
  //           lat: lat,
  //           long: long
  //         };
  //         resolve(loc);
  //       } else {
  //         reject('Geocoder failed due to: ' + status);
  //       }
  //     });
  //   });
  // }
}
