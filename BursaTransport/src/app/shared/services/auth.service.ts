import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:3000/api/users/";

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.authUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;

        if (user.success) {
          console.log(user.token);

          // localStorage.setItem('token', user.token);
        }
      })
    )
  }


}
