import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subscription } from 'rxjs';
import { SocketIoService } from './shared/services/socket-io.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranzactieTransportModalContentComponent } from './shared/components/tranzactie-transport-modal-content/tranzactie-transport-modal-content.component';
import { NotificareTranzactieModalContentComponent } from './shared/components/notificare-tranzactie-modal-content/notificare-tranzactie-modal-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  helper = new JwtHelperService();
  private transportSub$: Subscription;
  private respingereSub$: Subscription;
  title = 'BursaTransport';
  constructor(
    private authService: AuthService,
    public socketService: SocketIoService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.authService.decodedToken = this.helper.decodeToken(token);
    // daca user-ul este logat isi inregistreaza socketId-ul in backend
    if (this.authService.isLoggedIn()) {
      this.socketService.setSocketId(this.authService.getCompanieId());
    }
    // declanseaza modalul pentru trazactie transport
    this.transportSub$ = this.socketService.ofertaTransport.subscribe(
      (data) => {
        var idTransportator = data.idTransportator;
        this.authService
          .getCompanieById(idTransportator)
          .subscribe((companie) => {
            this.openTranzactie(companie.data, data.transport);
          });
      }
    );

    // afiseaza notificare catre transportator cu decizia expeditorului
    // intr-un modal
    this.respingereSub$ = this.socketService.respingere.subscribe((resping) => {
      var idExpeditor = resping.idExpeditor;
      var transport = resping.transport;
      this.authService.getCompanieById(idExpeditor).subscribe((companie) => {
        const modalRef = this.modalService.open(
          NotificareTranzactieModalContentComponent,
          {
            windowClass: 'dark-modal',
          }
        );
        modalRef.componentInstance.expeditor = companie.data;
        modalRef.componentInstance.transport = transport;
        modalRef.componentInstance.actiune = 'refuzata';
      });
    });
  }
  // functie ce afiseaza modalul pentru trazactia unui transport
  openTranzactie(companie, transport) {
    const modalRef = this.modalService.open(
      TranzactieTransportModalContentComponent,
      {
        windowClass: 'dark-modal',
      }
    );
    modalRef.componentInstance.transportator = companie;
    modalRef.componentInstance.transport = transport;
  }

  ngOnDestroy(): void {
    this.transportSub$.unsubscribe();
    this.respingereSub$.unsubscribe();
  }
}
