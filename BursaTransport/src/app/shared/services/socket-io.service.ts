import { Transport } from './../../models/transport';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class SocketIoService {
  constructor(private socket: Socket) {}

  dorescTransport(transport: Transport, idUser) {
    this.socket.emit('dorescTransport', { transport: transport, id: idUser });
  }
}
