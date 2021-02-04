import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:3000/api/users";
  helper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.authUrl + '/login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user.success) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.helper.decodeToken(user.token);


        }
      })
    )
  }

  register(model: any) {
    return this.http.post(this.authUrl, model);
  }


  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !this.helper.isTokenExpired(token);
  }




}
