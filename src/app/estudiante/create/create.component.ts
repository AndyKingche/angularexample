import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../estudiante.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { NombreComponent } from '../nombre/nombre.component';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import {Estudiante} from '../estudiante';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  estudianteForm: FormGroup;
  estudiante: Estudiante[];

  constructor(public fb: FormBuilder,
    private router: Router,
    public estudianteService: EstudianteService, private modalService: NgbModal) { }
    closeResult: string;
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

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}


