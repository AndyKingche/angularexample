import { NgModule,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { EstudianteRoutingModule } from './estudiante-routing.module';
import { NombreComponent } from './nombre/nombre.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NombreComponent],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClientModule,
    HttpClient,
],
})
export class EstudianteModule { 
  @ViewChild(NombreComponent) nombre: NombreComponent;
}
