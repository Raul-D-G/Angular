import { Component, OnInit } from '@angular/core';
import { TransportService } from "../../../../shared/services/transport.service";
import { Transport } from "../../../../models/transport";

@Component({
  selector: 'app-transporturi',
  templateUrl: './transporturi.component.html',
  styleUrls: ['./transporturi.component.css']
})

export class TransporturiComponent implements OnInit {

  transportList: Transport[] = [];

  constructor(private transportService: TransportService) { }

  ngOnInit(): void {
    this.loadTransporturi();
  }


  loadTransporturi() {
    this.transportService.getTransporturi().subscribe((transporturi) => {

      this.transportList = transporturi.results;

      console.log(this.transportList);

    })
  }

}
