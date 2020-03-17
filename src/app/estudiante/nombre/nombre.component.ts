import { Component, OnInit, Inject } from '@angular/core';
import {EstudianteService } from '../estudiante.service';
import { Estudiante } from '../estudiante';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {

  estudiante: Estudiante[] = [];


  constructor(public estudianteService: EstudianteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.estudianteService.getAll().subscribe((data: Estudiante[])=>{
      console.log(data);
      this.estudiante = data;
    });

  }
  eliminar(id:number){

    this.estudianteService.delete(id).subscribe(res=>{
      this.ngOnInit();
    console.log("eliminado",res)})
  }
}


