import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

constructor(private loginService : LoginService, private rutas:Router){
}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let currentUser = this.loginService.usuarioAutenticado;
    if(currentUser && currentUser.accessToken){
      this.rutas.navigate(['portfolio']);
      return false;
    } else {
      return true;
    }
  }
  
}
