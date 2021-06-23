import { Transport } from './../../../models/transport';
import { TranzactiiService } from './../../../shared/services/tranzactii.service';
import { Component, OnInit } from '@angular/core';

import { Tranzactie } from '../../../models/tranzactie.model';
import { AlertService } from 'ngx-alerts';
import { SocketIoService } from 'src/app/shared/services/socket-io.service';
@Component({
  selector: 'app-lista-tranzactii',
  templateUrl: './lista-tranzactii.component.html',
  styleUrls: ['./lista-tranzactii.component.css'],
})
export class ListaTranzactiiComponent implements OnInit {
  tranzactiiList: Tranzactie[] = [];

  constructor(
    private tranzactiiSerice: TranzactiiService,
    private alertService: AlertService,
    private socketService: SocketIoService
  ) {}

  ngOnInit(): void {
    this.loadTranzactii();
  }

  loadTranzactii() {
    this.tranzactiiSerice.getTranzactii().subscribe((tranzactii) => {
      this.tranzactiiList = tranzactii;
    });
  }

  // sterge tranzactia si notifica in timp real transportatorul
  stergeTranzactie(transport: Transport) {
    var tranzactie: Tranzactie;

    this.tranzactiiList.forEach((tr, index) => {
      if (tr.idTransport === transport.id) {
        tranzactie = tr;
        this.tranzactiiList.splice(index, 1);
      }
    });
    const resping = {
      idTransportator: tranzactie.idTransportator,
      idExpeditor: tranzactie.idExpeditor,
      transport: transport,
    };
    this.socketService.rerspingeTransport(resping);
    this.tranzactiiSerice.deleteTranzactie(transport.id).subscribe((data) => {
      this.alertService.success(data['message']);
    });
  }
}
