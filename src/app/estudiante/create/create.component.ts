import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../estudiante.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
      nombre: ['']
    })
  }
  submitForm() {
    this.estudianteService.create(this.estudianteForm.value).subscribe(res => {
      console.log('estudiante creado!')
      this.router.navigateByUrl('estudiante/crear')})

  }

}
