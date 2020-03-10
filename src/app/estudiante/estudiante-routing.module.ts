import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NombreComponent} from './nombre/nombre.component';

const routes: Routes = [
  {path:'estudiante',redirectTo:'estudiante/nombre',pathMatch:'full'},
  {path:'estudiante/nombre',component:NombreComponent},
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
