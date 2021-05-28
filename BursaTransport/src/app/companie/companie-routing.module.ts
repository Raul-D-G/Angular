import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransporturiBursaComponent } from './components/transporturi-bursa/transporturi-bursa.component';

import { TransportatorGuardGuard } from '../guards/transportator-guard.guard';

const routes: Routes = [
  {
    path: 'companie/bursaTransporturi',
    component: TransporturiBursaComponent,
    canActivate: [TransportatorGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanieRoutingModule {}
