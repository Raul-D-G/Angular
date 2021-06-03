import { TranzactiiService } from './../../../../../shared/services/tranzactii.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Transport } from '../../../../../models/transport';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanieModalContentComponent } from '../../../../../shared/components/companie-modal-content/companie-modal-content.component';
import { SocketIoService } from 'src/app/shared/services/socket-io.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  // encapsulation: ViewEncapsulation.None,
  styleUrls: ['./transport.component.css'],
})
export class TransportComponent implements OnInit {
  @Input() transportItem: Transport;
  @Input() functie: string;
  @Output() onStergere: EventEmitter<any> = new EventEmitter();
  @Output() onAccepta: EventEmitter<any> = new EventEmitter();

  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    private socketService: SocketIoService,
    private tranzactiiService: TranzactiiService
  ) {}

  ngOnInit(): void {}

  detalii() {
    var idExpeditor = this.transportItem.idExpeditor;
    this.authService.getCompanieById(idExpeditor).subscribe((companie) => {
      this.open(companie.data, this.transportItem);
    });
  }
  tipStergere() {
    return this.functie === 'Sterge Trasnport';
  }
  sterge() {
    this.onStergere.emit(this.transportItem);
  }
  open(companie, transport) {
    const modalRef = this.modalService.open(CompanieModalContentComponent, {
      windowClass: 'dark-modal',
    });
    modalRef.componentInstance.companie = companie;
    modalRef.componentInstance.transport = transport;
  }

  accepta() {
    var idUser = this.authService.getCompanieId();
    var data = {
      idTransport: this.transportItem.id,
      idTransportator: idUser,
      idExpeditor: this.transportItem.idExpeditor,
    };
    this.tranzactiiService.registerTranzactie(data).subscribe((res) => {
      console.log(res);
    });

    // this.socketService.dorescTransport(this.transportItem, idUser);
  }
}
