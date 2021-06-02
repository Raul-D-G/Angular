import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Transport } from '../../../../../models/transport';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css'],
})
export class TransportComponent implements OnInit {
  @Input() transportItem: Transport;
  @Input() functie: string;
  @Output() onDetalii: EventEmitter<any> = new EventEmitter();
  @Output() onStergere: EventEmitter<any> = new EventEmitter();
  @Output() onAccepta: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  detalii() {
    this.onDetalii.emit(this.transportItem);
  }
  accepta() {
    this.onAccepta.emit(this.transportItem);
  }
  tipStergere() {
    return this.functie === 'Sterge Trasnport';
  }
  sterge() {
    this.onStergere.emit(this.transportItem);
  }
}
