import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Transport } from '../../../../../models/transport';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css'],
})
export class TransportComponent implements OnInit {
  @Input() transportItem: Transport;
  @Output() onDetalii: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  detalii() {
    alert('detaliis');
  }
  accepta() {
    alert('accepta');
  }
}
