import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ActualizarDatosService {

  constructor(private http:HttpClient) { }

  actualizarDatos(ruta : string, data : any):Observable<any>{
    return this.http.post('../../assets/dist/datos.json' + ruta, data)
  }
}

