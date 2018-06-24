import { HeroService } from './hero.service';
import { EstadiaService } from './estadia.service';
import { VueloService } from './vuelo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VueloComponent } from './vuelo/vuelo.component';
import { EstadiaComponent } from './estadia/estadia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    VueloComponent,
    EstadiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [HeroService,EstadiaService,VueloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
