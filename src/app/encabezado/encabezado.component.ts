import { Component, OnInit, Output, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { TokenStorageService } from '../servicios/token-storage.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {

  usuarioAutenticado : boolean = false;
  isLoggedIn : boolean;
  isLoggin : boolean = false;

  constructor( 
              private authService : AuthService,
              private tokenStorage : TokenStorageService,
              private ruta : Router)
              { 
                this.authService.isLoggin.subscribe(data=>{
                  this.isLoggin = data;
                })
                this.isLoggedIn = false;
                this.authService.currentUser.subscribe(data=>{
                  if (data && data.accessToken){
                    this.usuarioAutenticado = true;
                  } else {
                    this.usuarioAutenticado = false;
                  }
                });

              }

  ngOnInit(): void {
  }

  iniciarSesion(){
  this.ruta.navigate(['/login']);
 }

  cerrarSesion(event : Event) {
    event.preventDefault();
    this.tokenStorage.signOut();
    this.authService.currentUser.next(null);    
  }

  volver(){
    this.ruta.navigate(["/portfolio"]);
  }
}
