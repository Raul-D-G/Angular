import { Component, OnInit } from '@angular/core';
import { TransportService } from "../../../../shared/services/transport.service";
import { Transport } from "../../../../models/transport";
import { DataService } from "../../../../shared/services/data.service";

@Component({
  selector: 'app-transporturi',
  templateUrl: './transporturi.component.html',
  styleUrls: ['./transporturi.component.css']
})

export class TransporturiComponent implements OnInit {

  transportList: Transport[] = [];
  curse = { taraIncarcare: '', taraDescarcare: '' };
  scurse = { taraIncarcare: '', taraDescarcare: '' };

  constructor(
    private transportService: TransportService,
    private data: DataService) { }

  ngOnInit(): void {
    this.loadTransporturi();
  }

  loadTransporturi() {
    this.transportService.getTransporturi().subscribe((transporturi) => {

      this.transportList = transporturi.results;

      console.log(this.transportList);

    })
  }

  filtru() {
    this.scurse.taraIncarcare = this.curse.taraIncarcare;
    this.scurse.taraDescarcare = this.curse.taraDescarcare;
  }

  clearFiltru() {
    this.curse.taraIncarcare = '';
    this.curse.taraDescarcare = '';
    this.scurse.taraDescarcare = '';
    this.scurse.taraIncarcare = '';
  }

}
