import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { LosAngelesComponent } from './los-angeles/los-angeles.component';
import { DallasComponent } from './dallas/dallas.component';
import { TulsaComponent } from './tulsa/tulsa.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { ArlingtonComponent } from './arlington/arlington.component';
@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanJoseComponent,
    LosAngelesComponent,
    DallasComponent,
    TulsaComponent,
    ChicagoComponent,
    ArlingtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
