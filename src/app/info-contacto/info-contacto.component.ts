import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { General } from '../interfaces';
import { LoginService } from '../servicios/login.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-info-contacto',
  templateUrl: './info-contacto.component.html',
  styleUrls: ['./info-contacto.component.css']
})
export class InfoContactoComponent implements OnInit {

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
 
  constructor(private datos:ObtenerDatosService, private validacion:LoginService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.general = data.persona.general});
    this.validacion.login().subscribe(login => {this.validate = login.login});
  }
  
  editItem(general : General){
    console.log(general);
  }
}
