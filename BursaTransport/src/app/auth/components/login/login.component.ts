import { ProgressBarService } from './../../../shared/services/progress-bar.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, public progressBar: ProgressBarService, private alertService: AlertService) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm) {

    this.progressBar.startLoading();

    const loginObserver = {
      next: x => {
        this.progressBar.setSuccess();
        console.log('User login');
        this.alertService.success('Autentificare Reusita!');
        this.progressBar.completeLoading();
      },
      error: err => {
        this.progressBar.setError();
        console.error(err);
        this.alertService.danger(err.error);
        this.progressBar.completeLoading();
      }
    }
    this.authService.login(loginForm.value).subscribe(loginObserver);
  }

}
