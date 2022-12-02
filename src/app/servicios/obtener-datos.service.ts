import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const URL_API_VER = 'http://localhost:8080/ver/persona/1';

@Injectable({
  providedIn: 'root'
})

export class ObtenerDatosService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get(URL_API_VER);
  }


};