import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CompanieRoutingModule } from './companie-routing.module';
import { TransporturiBursaComponent } from './components/transporturi-bursa/transporturi-bursa.component';
import { TransporturiComponent } from './components/transporturi-bursa/transporturi/transporturi.component';
import { TransportComponent } from './components/transporturi-bursa/transporturi/transport/transport.component';
import { FiltruTransporturiPipe } from '../pipes/filtru-transporturi.pipe';


@NgModule({
  declarations: [TransporturiBursaComponent, TransporturiComponent, TransportComponent, FiltruTransporturiPipe],
  imports: [
    CommonModule,
    CompanieRoutingModule,
    FormsModule
  ]
})
export class CompanieModule { }
