import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { General } from '../interfaces';
import { LoginService } from '../servicios/login.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-tarjeta-principal',
  templateUrl: './tarjeta-principal.component.html',
  styleUrls: ['./tarjeta-principal.component.css']
})
export class TarjetaPrincipalComponent implements OnInit {

  general : General = {
    nombre : "",
    ocupacion : "",
    descripcion : "",
    foto : "",
    banner : "",
    nacimiento : new Date('1983/02/24'),
    whatsapp : "",
    email : "",
    repositorio : "",
    acercademi : "",
    facebook : "",
    instagram : "",
    tweeter : "",
};  

  validate : boolean = false;
  
  constructor(private datos:ObtenerDatosService, private validacion:LoginService) { 
  }
  
  edad (){
    const hoy : Date = new Date();
    const nacimiento : Date = new Date(this.general.nacimiento);
    if ((nacimiento.getMonth() < hoy.getMonth()) || (hoy.getMonth() == nacimiento.getMonth() && nacimiento.getDate() <= hoy.getDate())) {
      return Math.floor(hoy.getFullYear() - nacimiento.getFullYear())
    } 
      return Math.floor(hoy.getFullYear() - nacimiento.getFullYear() + 1)
  }

  
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.general = data.persona.general});
    this.validacion.login().subscribe(login => {this.validate = login.login});

  }

  editItem(general : General){
    console.log(general);
  }
}
