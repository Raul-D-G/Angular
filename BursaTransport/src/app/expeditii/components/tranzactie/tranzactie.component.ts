import { Transport } from './../../../models/transport';
import { TransportService } from './../../../shared/services/transport.service';
import { Component, Input, OnInit } from '@angular/core';
import { Tranzactie } from 'src/app/models/tranzactie.model';

@Component({
  selector: 'app-tranzactie',
  templateUrl: './tranzactie.component.html',
  styleUrls: ['./tranzactie.component.css'],
})
export class TranzactieComponent implements OnInit {
  @Input() tranzactieItem: Tranzactie;
  transportItem: Transport;
  constructor(private transportService: TransportService) {}

  ngOnInit(): void {
    this.getTransport(this.tranzactieItem.idTransport);
  }

  getTransport(idTransport: number) {
    return this.transportService
      .getTransportById(idTransport)
      .subscribe((transport) => {
        this.transportItem = transport;
      });
  }
}
