import { Injectable } from '@angular/core';
import { Estudiante } from './estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
private estudiante:Estudiante[];
  constructor() { }
}
