import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ActualizarDatosService {

  private url : String = "https://backendportfolio.fly.dev";
   

  constructor(private http:HttpClient) { }

  actualizarDatos(ruta : string, data : any):Observable<any>{
    return this.http.post(this.url + ruta, data)
  }

  borrarDatos(ruta: string):Observable<any>{
    return this.http.post(this.url + ruta, null);
  }

}

