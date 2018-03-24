import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {

  constructor() { }
  getCurrentLocation() {
    const geoSuccess = function (position) {
      // Do magic with location
      console.log(position);
    };
    const geoError = function (error) {
      switch (error.code) {
        case error.TIMEOUT:
          // The user didn't accept the callout
          console.log('Error timeout');
          break;
      }
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  }
  // parseLocation(lat, long): Promise<any>{
  // }

}
