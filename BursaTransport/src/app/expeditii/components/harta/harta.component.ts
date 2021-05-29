import { Component, OnInit } from '@angular/core';

declare var google;

@Component({
  selector: 'app-harta',
  templateUrl: './harta.component.html',
  styleUrls: ['./harta.component.css'],
})
export class HartaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const myLatLng = { lat: 45.759689, lng: 24.230371 };
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: myLatLng,
        zoom: 6,
      }
    );
    const options = {
      fields: ['formatted_address', 'geometry', 'name'],
      origin: map.getCenter(),
      strictBounds: false,
      types: ['establishment'],
    };
  }
}
