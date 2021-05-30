import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = 'http://localhost:3000/api/users';
  helper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient, private router: Router) {}

  login(model: any) {
    return this.http.post(this.authUrl + '/login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user.success) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.helper.decodeToken(user.token);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
  }

  register(model: any) {
    return this.http.post(this.authUrl, model);
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !this.helper.isTokenExpired(token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getRol() {
    return this.decodedToken.user.rol;
  }

  getCompanieId() {
    console.log(this.decodedToken.user.id);

    return this.decodedToken.user.id;
  }
}
