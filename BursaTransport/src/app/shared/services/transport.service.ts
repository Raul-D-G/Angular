import { Transport } from './../../models/transport';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  transportUrl = "http://localhost:3000/api/transporturi";
  auth_token = localStorage.getItem('token');




  constructor(private http: HttpClient) { }

  getTransporturi(): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })

    return this.http.get<any>(this.transportUrl, { headers: headers });
  }
}
