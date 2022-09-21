import { Component, OnInit } from '@angular/core';
import { General } from '../interfaces';
import { LoginService } from '../servicios/login.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-tarjeta-principal',
  templateUrl: './tarjeta-principal.component.html',
  styleUrls: ['./tarjeta-principal.component.css']
})
export class TarjetaPrincipalComponent implements OnInit {

  general : General[] = [];   
  validate : boolean = false;
  
  constructor(private datos:ObtenerDatosService, private validacion:LoginService) { 
  }
  
  public edad () {
    let hoy : Date = new Date();
    let nacimiento : Date = new Date(this.general[0].nacimiento);
    if ((nacimiento.getMonth() < hoy.getMonth()) || (hoy.getMonth() == nacimiento.getMonth() && nacimiento.getDate() <= hoy.getDate())) {
      return Math.floor(hoy.getFullYear() - nacimiento.getFullYear())
    } 
      return Math.floor(hoy.getFullYear() - nacimiento.getFullYear() + 1)
  }
  
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.general = data.general});
    this.validacion.login().subscribe(login => {this.validate = login.login});
  }

  editItem(general : General){
    console.log(general);
  }
}
