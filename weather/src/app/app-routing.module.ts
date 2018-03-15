import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonComponent } from './washington/washington.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'burbank',component: BurbankComponent },
  { path: 'chicago',component: ChicagoComponent },
  { path: 'dallas', component: DallasComponent },
  { path: 'washington', component: WashingtonComponent },
  { path: 'seattle', component: SeattleComponent },
  { path: 'san-jose', component: SanJoseComponent },
  { path: '', pathMatch: 'full', redirectTo: '/burbank' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }