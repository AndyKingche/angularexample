import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Estudiante } from './estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private apiServer = "http://localhost:3000/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
//listar
  getAll(): Observable<Estudiante[]> {
    return this.httpClient.get<Estudiante[]>(this.apiServer + 'estudiante')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  //crear 
  create(estudiante): Observable<Estudiante> {
    return this.httpClient.post<Estudiante>(this.apiServer + 'estudiante/', JSON.stringify(estudiante), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  //borrar 
  delete(id:number){
    console.log(id)
    return this.httpClient.delete<Estudiante>(this.apiServer + 'estudiante/'+id,this.httpOptions)
    .pipe(
      catchError(this.errorHandler) 
    ).subscribe(( )=>console.log("Estudiante Eliminado"))
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
  
}
