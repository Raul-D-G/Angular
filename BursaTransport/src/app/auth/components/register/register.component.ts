import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(registerform: NgForm) {

    const registerObserver = {

      next: x => console.log('User nou', x),
      error: err => console.error(err)
    }
    this.authService.register(registerform.value).subscribe(registerObserver);

  }

}
