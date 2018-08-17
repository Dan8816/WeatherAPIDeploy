import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { LosAngelesComponent } from './los-angeles/los-angeles.component';
import { DallasComponent } from './dallas/dallas.component';
import { TulsaComponent } from './tulsa/tulsa.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { ArlingtonComponent } from './arlington/arlington.component'
const routes: Routes = [
  { path : 'seattle', component: SeattleComponent },
  { path : 'san-jose', component: SanJoseComponent },
  { path : 'los-angeles', component: LosAngelesComponent },
  { path : 'dallas', component: DallasComponent },
  { path : 'tulsa', component: TulsaComponent },
  { path : 'chicago', component: ChicagoComponent },
  { path : 'arlington', component: ArlingtonComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' },
  //{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
