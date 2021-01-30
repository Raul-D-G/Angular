import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm) {

    const loginObserver = {
      next: x => console.log('User login'),
      error: err => console.error(err)
    }
    this.authService.login(loginForm.value).subscribe(loginObserver);
  }

}
