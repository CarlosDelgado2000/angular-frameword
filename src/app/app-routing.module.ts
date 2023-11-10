import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';

import { InicioComponent } from './componente/inicio/inicio.component';
import { RegistroComponent } from './componente/registro/registro.component';
import { RecuperarComponent } from './componente/recuperar/recuperar.component';
import { HorarioGestionComponent } from './componente/horario-gestion/horario-gestion.component';



const routes: Routes = [
  
  {path: 'inicio', component: InicioComponent },
  {path: 'registro', component: RegistroComponent },
  { path: 'recuperar', component: RecuperarComponent },
  { path: 'horario-gestion', component: HorarioGestionComponent },
  {path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
