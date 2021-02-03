import { ProgressBarService } from './../../../shared/services/progress-bar.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, public progressBar: ProgressBarService, private alertService: AlertService) { }

  ngOnInit(): void {
  }

  onSubmit(registerform: NgForm) {

    this.progressBar.startLoading();
    const registerObserver = {

      next: x => {
        this.progressBar.setSuccess();
        console.log('User nou', x);
        this.alertService.success('Inregistrare Reusita!');
        this.progressBar.completeLoading();
      },
      error: err => {
        this.progressBar.setError();
        console.error(err);
        this.alertService.danger('Inregistrare esuata!');
        this.progressBar.completeLoading();
      }
    }
    this.authService.register(registerform.value).subscribe(registerObserver);

  }

}
