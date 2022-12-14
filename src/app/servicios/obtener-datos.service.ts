import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

const URL_API_VER = 'https://backendportfolio.fly.dev/ver/persona/1';
const URL_API = "https://backendportfolio.fly.dev";
@Injectable({
  providedIn: 'root'
})

export class ObtenerDatosService {

  datos : BehaviorSubject<any>;

  constructor(private http:HttpClient) { 
    this.datos = new BehaviorSubject<any>('{}');
  }

  obtenerDatos():Observable<any>{
    return this.http.get(URL_API_VER).pipe(map(data=>{
      this.datos.next(data);
      return data;
    }));
  }

  actualizarLista(url : string) :Observable<any>{
    return this.http.get(URL_API + url)
  }


};