import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ActualizarDatosService {

  private url : String = "http://localhost:8080";
   

  constructor(private http:HttpClient) { }

  actualizarDatos(ruta : string, data : any):Observable<any>{
    console.log(this.url + ruta);
    return this.http.post(this.url + ruta, data)
  }
}

