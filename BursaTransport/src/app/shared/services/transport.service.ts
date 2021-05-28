import { Transport } from './../../models/transport';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransportService {
  transportUrl = 'http://localhost:3000/api/transporturi';
  auth_token = localStorage.getItem('token');

  constructor(private http: HttpClient) {}

  getTransporturi(): Observable<Transport[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<Transport[]>(this.transportUrl, { headers: headers });
  }
}
