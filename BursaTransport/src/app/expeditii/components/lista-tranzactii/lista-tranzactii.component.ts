import { TranzactiiService } from './../../../shared/services/tranzactii.service';
import { Component, OnInit } from '@angular/core';

import { Tranzactie } from '../../../models/tranzactie.model';
@Component({
  selector: 'app-lista-tranzactii',
  templateUrl: './lista-tranzactii.component.html',
  styleUrls: ['./lista-tranzactii.component.css'],
})
export class ListaTranzactiiComponent implements OnInit {
  tranzactiiList: Tranzactie[] = [];

  constructor(private tranzactiiSerice: TranzactiiService) {}

  ngOnInit(): void {
    this.loadTranzactii();
  }

  loadTranzactii() {
    this.tranzactiiSerice.getTranzactii().subscribe((tranzactii) => {
      this.tranzactiiList = tranzactii;
    });
  }
}
