import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Persona } from '../interfaces';


@Injectable({
  providedIn: 'root'
})

export class ObtenerDatosService {

    constructor(private http:HttpClient) { }
  
    obtenerDatos():Observable<any>{
    return this.http.get('../../assets/dist/datos.json')
    }

};
  