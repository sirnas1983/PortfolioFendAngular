import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http : HttpClient) {}
    
  login() : Observable <any> {
       return this.http.get('../../assets/dist/login.json')
  }

}

