import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../estudiante.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { NombreComponent } from '../nombre/nombre.component';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  estudianteForm: FormGroup;

  constructor(public fb: FormBuilder,
    private router: Router,
    public estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.estudianteForm = this.fb.group({
      nombre: [''],
      apellido:[''],
      edad:0,
      cedula:['']

    })

  }
  submitForm() {
    this.estudianteService.create(this.estudianteForm.value).subscribe(res => {
      console.log('estudiante creado!')
      this.router.navigateByUrl('estudiante/crear')
      this.estudianteForm.setValue({
        nombre:" ",
        apellido:" ",
        edad:" ",
        cedula:" "

      })
    })
  }

}
