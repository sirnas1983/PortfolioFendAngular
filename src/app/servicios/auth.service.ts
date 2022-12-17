import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = "https://backendportfolio.fly.dev/login";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  currentUser : BehaviorSubject<any>;
  isLoggin : BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private tokenStorage : TokenStorageService) { 
    this.currentUser = new BehaviorSubject<any>('');
    this.isLoggin = new BehaviorSubject<boolean>(false);
  }

  login(usuario : string): Observable<any> {
    return this.http.post(AUTH_API, usuario, httpOptions)
    .pipe(map(data=>
      {
      this.currentUser.next(data);
      this.tokenStorage.isLoggedIn.next(true);
      return data;
    }));
  }
  
}