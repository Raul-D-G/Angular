import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../guards/auth-guard.guard';

import { AdaugaTransporturiComponent } from './pages/adauga-transporturi/adauga-transporturi.component';
const routes: Routes = [
  {
    path: 'companie/adaugaTransport',
    component: AdaugaTransporturiComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpeditiiRoutingModule {}
