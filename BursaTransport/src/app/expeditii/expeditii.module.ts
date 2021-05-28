import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpeditiiRoutingModule } from './expeditii-routing.module';
import { AdaugaTransporturiComponent } from './pages/adauga-transporturi/adauga-transporturi.component';
import { AdaugaTransportComponent } from './components/adauga-transport/adauga-transport.component';


@NgModule({
  declarations: [AdaugaTransporturiComponent, AdaugaTransportComponent],
  imports: [
    CommonModule,
    ExpeditiiRoutingModule
  ]
})
export class ExpeditiiModule { }
