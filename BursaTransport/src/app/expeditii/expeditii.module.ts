import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpeditiiRoutingModule } from './expeditii-routing.module';
import { AdaugaTransporturiComponent } from './pages/adauga-transporturi/adauga-transporturi.component';
import { AdaugaTransportComponent } from './components/adauga-transport/adauga-transport.component';
import { HartaComponent } from './components/harta/harta.component';

@NgModule({
  declarations: [AdaugaTransporturiComponent, AdaugaTransportComponent, HartaComponent],
  imports: [CommonModule, ExpeditiiRoutingModule, FormsModule],
})
export class ExpeditiiModule {}
