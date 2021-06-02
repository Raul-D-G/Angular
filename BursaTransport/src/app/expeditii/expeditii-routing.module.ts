import { ExpeditiiGuardGuard } from './../guards/expeditii-guard.guard';
import { VeziTransporturileTaleComponent } from './pages/vezi-transporturile-tale/vezi-transporturile-tale.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdaugaTransporturiComponent } from './pages/adauga-transporturi/adauga-transporturi.component';
const routes: Routes = [
  {
    path: 'companie/adaugaTransport',
    component: AdaugaTransporturiComponent,
    canActivate: [ExpeditiiGuardGuard],
  },
  {
    path: 'companie/veziTransporturi',
    component: VeziTransporturileTaleComponent,
    canActivate: [ExpeditiiGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpeditiiRoutingModule {}
