import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';
import { TokenStorageService } from '../servicios/token-storage.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {


  datosPrincipales : any;
  validate : boolean = false;

  constructor(private datos:ObtenerDatosService, 
              private authService : AuthService,
              private tokenStorage : TokenStorageService){ 
                this.authService.currentUser.subscribe(data=>{
                  if (data && data.accessToken){
                    this.validate = true;
                  } else {
                    this.validate = false;
                  }
                })
              }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.datosPrincipales = data});
  }

 

  cerrarSesion(event : Event) {
    event.preventDefault();
    this.tokenStorage.signOut();
    this.authService.currentUser.next(null);    
  }

}
