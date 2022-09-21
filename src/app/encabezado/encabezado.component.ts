import { Component, OnInit, Output } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {


  datosPrincipales : any;
  validate : boolean = false;

  constructor(private datos:ObtenerDatosService, private validacion:LoginService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.datosPrincipales = data});
    this.validacion.login().subscribe(login => {this.validate = login.login});
  }

  cerrarSesion() {
    this.validate = !this.validate;
  }

}
