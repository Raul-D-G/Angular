import { Transport } from './../../models/transport';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SocketIoService {
  ofertaTransport = this.socket.fromEvent<any>('ofertaTransport');

  constructor(private socket: Socket) {}

  setSocketId(idUser) {
    this.socket.emit('setSocketId', idUser);
  }

  dorescTransport(transport: Transport, idUser) {
    this.socket.emit('dorescTransport', {
      idTransportator: idUser,
      idExpeditor: transport.idExpeditor,
      transport: transport,
    });
  }
  // ofertaTransport() {
  //   return this.socket.fromEvent('ofertaTransport').pipe(
  //     map((data) => {
  //       console.log(data);
  //     })
  //   );
  // }
}
