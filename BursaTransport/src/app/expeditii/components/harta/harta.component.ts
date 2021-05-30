import { InteractionService } from './../../../shared/services/interaction.service';
import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

// declare var google;

@Component({
  selector: 'app-harta',
  templateUrl: './harta.component.html',
  styleUrls: ['./harta.component.css'],
})
export class HartaComponent implements OnInit {
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private interactionService: InteractionService
  ) {}
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;

  ngOnInit(): void {
    const myLatLng = { lat: 45.759689, lng: 24.230371 };
    this.mapsAPILoader.load().then(() => {
      var directionsService = new google.maps.DirectionsService();
      var directionsDisplay = new google.maps.DirectionsRenderer();
      const map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          center: myLatLng,
          zoom: 6,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        }
      );

      this.interactionService.message$.subscribe((ruta) => {
        var self = this;
        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(document.getElementById('panel'));

        if (ruta.origin) {
          var request = {
            origin: ruta.origin,
            destination: ruta.destination,
            travelMode: google.maps.TravelMode.DRIVING,
          };

          directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
              const raspuns = {
                km: response.routes[0].legs[0].distance.value * 0.001,
                timp: response.routes[0].legs[0].duration.text,
              };
              self.interactionService.sendMessage(raspuns);

              directionsDisplay.setDirections(response);
            }
          });
        }
      });
    });
  }

  // private setCurrentLocation() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 8;
  //       this.getAddress(this.latitude, this.longitude);
  //     });
  //   }
  // }

  // getAddress(latitude, longitude) {
  //   this.geoCoder.geocode(
  //     { location: { lat: latitude, lng: longitude } },
  //     (results, status) => {
  //       if (status === 'OK') {
  //         if (results[0]) {
  //           this.zoom = 12;
  //           this.address = results[0].formatted_address;
  //         } else {
  //           window.alert('No results found');
  //         }
  //       } else {
  //         window.alert('Geocoder failed due to: ' + status);
  //       }
  //     }
  //   );
  // }
}
