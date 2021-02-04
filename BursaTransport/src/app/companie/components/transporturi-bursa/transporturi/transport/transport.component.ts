import { Component, Input, OnInit } from '@angular/core';
import { Transport } from "../../../../../models/transport";

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {

  @Input() transportItem: Transport;

  constructor() { }

  ngOnInit(): void {
  }

}
