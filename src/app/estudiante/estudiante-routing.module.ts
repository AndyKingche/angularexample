import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NombreComponent} from './nombre/nombre.component';
import {CreateComponent} from './create/create.component';

const routes: Routes = [
  {path:'estudiante',redirectTo:'estudiante/nombre',pathMatch:'full'},
  {path:'estudiante/nombre',component:NombreComponent},
  {path:'estudiante/crear',component:CreateComponent},



];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
