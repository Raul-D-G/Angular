import { TranzactiiService } from './../../services/tranzactii.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SocketIoService } from '../../services/socket-io.service';

@Component({
  selector: 'app-tranzactie-transport-modal-content',
  templateUrl: './tranzactie-transport-modal-content.component.html',
  styleUrls: ['./tranzactie-transport-modal-content.component.css'],
})
export class TranzactieTransportModalContentComponent implements OnInit {
  @Input() transport;
  @Input() transportator;
  constructor(
    public activeModal: NgbActiveModal,
    private tranzactieService: TranzactiiService,
    private socketService: SocketIoService
  ) {}

  ngOnInit(): void {}

  acceptaTransportator() {
    this.activeModal.close();
  }
  respingeTransportator() {
    this.tranzactieService
      .deleteTranzactie(this.transport.id)
      .subscribe((data) => {
        console.log(data);
      });

    const resping = {
      idTransportator: this.transportator.id,
      idExpeditor: this.transport.idExpeditor,
      transport: this.transport,
    };
    this.socketService.rerspingeTransport(resping);

    this.activeModal.close();
  }
}
