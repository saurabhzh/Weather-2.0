import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serach-map',
  templateUrl: './serach-map.component.html',
  styleUrls: ['./serach-map.component.css']
})
export class SerachMapComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
