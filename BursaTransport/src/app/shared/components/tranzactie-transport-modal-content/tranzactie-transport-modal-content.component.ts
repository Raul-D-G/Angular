import { TranzactiiService } from './../../services/tranzactii.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tranzactie-transport-modal-content',
  templateUrl: './tranzactie-transport-modal-content.component.html',
  styleUrls: ['./tranzactie-transport-modal-content.component.css'],
})
export class TranzactieTransportModalContentComponent implements OnInit {
  @Input() transport;
  @Input() companie;
  constructor(
    public activeModal: NgbActiveModal,
    private tranzactieService: TranzactiiService
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

    this.activeModal.close();
  }
}
