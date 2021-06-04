import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { SocketIoService } from './shared/services/socket-io.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranzactieTransportModalContentComponent } from './shared/components/tranzactie-transport-modal-content/tranzactie-transport-modal-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  helper = new JwtHelperService();
  private _transportSub: Subscription;
  title = 'BursaTransport';
  mediaSub: Subscription;
  deviceXs: boolean;
  constructor(
    private authService: AuthService,
    public mediaObserver: MediaObserver,
    public socketService: SocketIoService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.authService.decodedToken = this.helper.decodeToken(token);
    if (this.authService.isLoggedIn()) {
      this.socketService.setSocketId(this.authService.getCompanieId());
    }
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
      }
    );
    this._transportSub = this.socketService.ofertaTransport.subscribe(
      (data) => {
        var idTransportator = data.idTransportator;
        this.authService
          .getCompanieById(idTransportator)
          .subscribe((companie) => {
            console.log(companie);

            this.openTranzactie(companie.data, data.transport);
          });
      }
    );
  }

  openTranzactie(companie, transport) {
    const modalRef = this.modalService.open(
      TranzactieTransportModalContentComponent,
      {
        windowClass: 'dark-modal',
      }
    );
    modalRef.componentInstance.companie = companie;
    modalRef.componentInstance.transport = transport;
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
    this._transportSub.unsubscribe();
  }
}
