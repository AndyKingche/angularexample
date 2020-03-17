import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Estudiante } from './estudiante';
import { Router } from '@angular/router';
import { SERVER_API_URL } from '../app.constants';

type EntityResponseType = HttpResponse<Estudiante>;
type EntityArrayResponseType = HttpResponse<Estudiante[]>;
@Injectable({
  providedIn: 'root'
})
export class EstudianteService  {

  private apiServer = SERVER_API_URL;
  
/*   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } */
  constructor(private httpClient: HttpClient,private route : Router) { }
//listar
  getAll(): Observable<Estudiante[]> {
    return this.httpClient.get<Estudiante[]>(this.apiServer + 'estudiante')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getEstudiante(id:number):Observable<Estudiante>{
   
      return this.httpClient.get(this.apiServer + 'estudiante/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
    
  }
  //crear 
  create(estudiante:Estudiante): Observable<Estudiante> {
    return this.httpClient.post<Estudiante>(this.apiServer + 'estudiante/', JSON.stringify(estudiante), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  //actualizar
  update(id:number, estudiante:Estudiante): Observable<Estudiante> {
    console.log("holaa",id);
    return this.httpClient.put<Estudiante>(this.apiServer + 'estudiante/' + id, JSON.stringify(estudiante), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  //borrar 
  delete(id:number){
 
    return this.httpClient.delete<Estudiante>(this.apiServer + 'estudiante/'+id,this.httpOptions)
    .pipe(
      catchError(this.errorHandler) 
    )
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
