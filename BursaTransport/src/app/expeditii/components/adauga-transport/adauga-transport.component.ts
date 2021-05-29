import { ProgressBarService } from './../../../shared/services/progress-bar.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

declare var google;

@Component({
  selector: 'app-adauga-transport',
  templateUrl: './adauga-transport.component.html',
  styleUrls: ['./adauga-transport.component.css'],
})
export class AdaugaTransportComponent implements OnInit {
  constructor(
    private authService: AuthService,
    public progressBar: ProgressBarService,
    private alertService: AlertService,
    private router: Router
  ) {}

  incarcare: string;
  descarcare: string;

  ngOnInit(): void {
    // var from_places = new google.maps.places.Autocomplete(
    //   document.getElementById('incarcare')
    // );
    // var to_places = new google.maps.places.Autocomplete(
    //   document.getElementById('descarcare')
    // );
  }

  onSubmit(transportForm: NgForm) {
    this.progressBar.startLoading();

    // const registerObserver = {
    //   next: (x) => {
    //     this.progressBar.setSuccess();
    //     this.alertService.success('Inregistrare Reusita!');
    //     this.progressBar.completeLoading();
    //     this.router.navigateByUrl('/login');
    //   },
    //   error: (err) => {
    //     this.progressBar.setError();
    //     this.alertService.danger('Inregistrare esuata!');
    //     this.progressBar.completeLoading();
    //   },
    // };
    // this.authService.register(registerform.value).subscribe(registerObserver);
  }
}
