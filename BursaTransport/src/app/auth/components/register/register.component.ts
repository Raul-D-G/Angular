import { ProgressBarService } from './../../../shared/services/progress-bar.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, public progressBar: ProgressBarService) { }

  ngOnInit(): void {
  }

  onSubmit(registerform: NgForm) {

    this.progressBar.startLoading();
    const registerObserver = {

      next: x => {
        console.log('User nou', x);
        this.progressBar.completeLoading();
        this.progressBar.setSuccess();
      },
      error: err => {
        console.error(err);
        this.progressBar.completeLoading();
        this.progressBar.setError();
      }
    }
    this.authService.register(registerform.value).subscribe(registerObserver);

  }

}
