import { TransportService } from './../../../shared/services/transport.service';
import { Component, OnInit } from '@angular/core';
import { Transport } from '../../../models/transport';

@Component({
  selector: 'app-transporturile-tale',
  templateUrl: './transporturile-tale.component.html',
  styleUrls: ['./transporturile-tale.component.css'],
})
export class TransporturileTaleComponent implements OnInit {
  constructor(private transportService: TransportService) {}

  transportList: Transport[] = [];

  ngOnInit(): void {
    this.loadTransporturi();
  }

  loadTransporturi() {
    this.transportService
      .getTransporturiByCompanieId()
      .subscribe((transporturi) => {
        this.transportList = transporturi;
      });
  }
}
