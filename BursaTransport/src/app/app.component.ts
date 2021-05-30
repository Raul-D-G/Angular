import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  helper = new JwtHelperService();
  title = 'BursaTransport';
  mediaSub: Subscription;
  deviceXs: boolean;
  constructor(
    private authService: AuthService,
    public mediaObserver: MediaObserver
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.authService.decodedToken = this.helper.decodeToken(token);
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
      }
    );
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}
