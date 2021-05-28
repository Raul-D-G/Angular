import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransporturiBursaComponent } from './components/transporturi-bursa/transporturi-bursa.component';

import { AuthGuard } from '../guards/auth-guard.guard';

const routes: Routes = [
  {
    path: 'companie/bursaTransporturi',
    component: TransporturiBursaComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanieRoutingModule {}
