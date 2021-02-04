import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanieRoutingModule } from './companie-routing.module';
import { TransporturiBursaComponent } from './components/transporturi-bursa/transporturi-bursa.component';
import { TransporturiComponent } from './components/transporturi-bursa/transporturi/transporturi.component';
import { TransportComponent } from './components/transporturi-bursa/transporturi/transport/transport.component';
import { FiltruTransporturiComponent } from './components/transporturi-bursa/filtru-transporturi/filtru-transporturi.component';


@NgModule({
  declarations: [TransporturiBursaComponent, TransporturiComponent, TransportComponent, FiltruTransporturiComponent],
  imports: [
    CommonModule,
    CompanieRoutingModule
  ]
})
export class CompanieModule { }
