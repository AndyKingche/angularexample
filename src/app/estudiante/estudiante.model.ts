export interface Estudiante {
  id?: number;
  nombre?: string;
  apellido?:string;
  edad?: number;
  cedula?: string;
}
export class IEstudiante implements Estudiante {
  constructor(
    public id?: number,
    public nombre?: string,
    public apellido?:string,
    public edad?: number,
    public cedula?: string
  )  {
    
  }
}