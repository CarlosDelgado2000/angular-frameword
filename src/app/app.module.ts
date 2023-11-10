import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { RegistroComponent } from './componente/registro/registro.component';
import { RouterModule } from '@angular/router';
import { RecuperarComponent } from './componente/recuperar/recuperar.component';
import { HorarioGestionComponent } from './componente/horario-gestion/horario-gestion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    RecuperarComponent,
    HorarioGestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
