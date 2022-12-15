import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

const AUTH_API = "https://backendportfolio.fly.dev/login";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  currentUser : BehaviorSubject<any>;

  constructor(private http: HttpClient) { 
    this.currentUser = new BehaviorSubject<any>('');
  }

  login(usuario : string): Observable<any> {
    return this.http.post(AUTH_API, usuario, httpOptions).pipe(map(data=>{
      this.currentUser.next(data);
      return data;
    }));
  }
}