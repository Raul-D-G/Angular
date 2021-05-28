import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpeditiiGuardGuard } from '../guards/expeditii-guard.guard';

import { AdaugaTransporturiComponent } from './pages/adauga-transporturi/adauga-transporturi.component';
const routes: Routes = [
  {
    path: 'companie/adaugaTransport',
    component: AdaugaTransporturiComponent,
    canActivate: [ExpeditiiGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpeditiiRoutingModule {}
