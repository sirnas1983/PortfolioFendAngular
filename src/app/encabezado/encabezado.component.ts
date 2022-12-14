import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { TokenStorageService } from '../servicios/token-storage.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {

  validate : boolean = false;

  constructor( 
              private authService : AuthService,
              private tokenStorage : TokenStorageService,
              private ruta : Router)
              { 
                this.authService.currentUser.subscribe(data=>{
                  if (data && data.accessToken){
                    this.validate = true;
                  } else {
                    this.validate = false;
                  }
                });

              }

  ngOnInit(): void {
  }

 login(){
  this.ruta.navigate(['/login']);
 }

  cerrarSesion(event : Event) {
    event.preventDefault();
    this.tokenStorage.signOut();
    this.authService.currentUser.next(null);    
  }

}
