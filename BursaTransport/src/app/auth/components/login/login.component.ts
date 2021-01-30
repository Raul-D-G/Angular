import { ProgressBarService } from './../../../shared/services/progress-bar.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, public progressBar: ProgressBarService) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm) {

    this.progressBar.startLoading();

    const loginObserver = {
      next: x => {
        console.log('User login');
        this.progressBar.completeLoading();
        this.progressBar.setSuccess();
      },
      error: err => {
        console.error(err);
        this.progressBar.completeLoading();
        this.progressBar.setError();
      }
    }
    this.authService.login(loginForm.value).subscribe(loginObserver);
  }

}
