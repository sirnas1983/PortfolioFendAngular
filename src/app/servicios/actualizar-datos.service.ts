import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { General, Persona } from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class ActualizarDatosService {

  constructor(private http:HttpClient) { }

  actualizarDatos(ruta : string, data : any):Observable<any>{
    return this.http.put('../../assets/dist/datos.json' + ruta, data)
  }
}

