import { NgModule,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { EstudianteRoutingModule } from './estudiante-routing.module';
import { NombreComponent } from './nombre/nombre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [NombreComponent, CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClientModule,
    HttpClient,
],
})
export class EstudianteModule { 
  @ViewChild(NombreComponent) nombre: NombreComponent;
  @ViewChild(CreateComponent) crear: CreateComponent;
  @ViewChild(UpdateComponent) actualizar: UpdateComponent;
}
