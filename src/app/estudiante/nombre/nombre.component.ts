import { Component, OnInit } from '@angular/core';
import {EstudianteService } from '../estudiante.service';
import { Estudiante } from '../estudiante';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {

  estudiante: Estudiante[] = [];


  constructor(public estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.estudianteService.getAll().subscribe((data: Estudiante[])=>{
      console.log(data);
      this.estudiante = data;
    });
  
  }
  

}


