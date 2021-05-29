import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpeditiiRoutingModule } from './expeditii-routing.module';
import { AdaugaTransporturiComponent } from './pages/adauga-transporturi/adauga-transporturi.component';
import { AdaugaTransportComponent } from './components/adauga-transport/adauga-transport.component';
import { HartaComponent } from './components/harta/harta.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AdaugaTransporturiComponent,
    AdaugaTransportComponent,
    HartaComponent,
  ],
  imports: [
    CommonModule,
    ExpeditiiRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAwh8fwzAoQVvP0uBgxuTRC6n2zMhTuctk',
      libraries: ['places'],
    }),
  ],
})
export class ExpeditiiModule {}
