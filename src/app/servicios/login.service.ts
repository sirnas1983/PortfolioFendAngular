import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  url = "url de la API de nuestro servicio de Login"
  currentSubjectUser : BehaviorSubject<any>;

  constructor(private http : HttpClient) {

    this.currentSubjectUser = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
    console.log("El servicio de autenticación esta en uso");
    console.log(this.currentSubjectUser);
  }

  login(credenciales : any) : Observable <any> {
    return this.http.post(this.url,credenciales).pipe(map(data =>{
      sessionStorage.setItem('currentUser',JSON.stringify(data));
      this.currentSubjectUser.next(data);
      return data;
    }))
  }

  get usuarioAutenticado(){
    return this.currentSubjectUser.value;
  }

  get validacion(){
    let currentUser = this.usuarioAutenticado;
    console.log(currentUser.accessToken);
    if(currentUser && currentUser.accessToken){
      return true;
    }else{
      return true;
    }
  }
}