import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';
import { TokenStorageService } from '../servicios/token-storage.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {


  datosPrincipales : any;
  validate : boolean = this.tokenService.isLogged();

  constructor(private datos:ObtenerDatosService, 
              private ruta : Router,
              private tokenService : TokenStorageService){ }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.datosPrincipales = data});
  }

  cerrarSesion(event : Event) {
    sessionStorage.clear();
    window.location.reload();
  }

}
