import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TranzactiiService {
  tranzactiiUrl = 'http://localhost:3000/api/tranzactii';
  constructor(private http: HttpClient) {}

  registerTranzactie(model: any) {
    return this.http.post<any>(this.tranzactiiUrl, model);
  }

  deleteTranzactie(transportId: number) {
    return this.http.delete(this.tranzactiiUrl + '/' + transportId);
  }
}
