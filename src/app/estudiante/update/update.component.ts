import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../estudiante.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  estudianteForm: FormGroup;

  constructor(public fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
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
    this.estudianteService.update(this.route.snapshot.params['id'],this.estudianteForm.value).subscribe(res => {
      console.log('estudiante actualizado!')
      const id=this.route.snapshot.params['id'];
      
      this.router.navigateByUrl('estudiante/nombre')
  
    })
  }
    

}
