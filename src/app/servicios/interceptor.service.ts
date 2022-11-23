import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private loginService : LoginService) { 
    
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = this.loginService.usuarioAutenticado;
    if(currentUser && currentUser.accessToken){
      req=req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.accessToken}`
        }
      })
    }
    return next.handle(req);
  }
}
