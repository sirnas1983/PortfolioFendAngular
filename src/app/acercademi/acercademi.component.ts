import { Component, OnInit } from '@angular/core';
import { General } from '../interfaces';
import { ActualizarDatosService } from '../servicios/actualizar-datos.service';
import { LoginService } from '../servicios/login.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {

  isHidden = false;
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

  editText : string = "";
  validate : boolean = false; 
  edit : boolean = false;

  constructor(private datos:ObtenerDatosService, private validacion:LoginService, private actualizar:ActualizarDatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.general = data.persona.general;console.log(this.general);});
    this.validacion.login().subscribe(login => {this.validate = login.login});
  }

  desplegar(){
    const boton : any = document.querySelector("#aboutme-card .toggle");
    boton.classList?.toggle("fa-chevron-down");
    boton.classList?.toggle("fa-chevron-up");
    this.isHidden = !this.isHidden;
  }

  showEditItem(item : General){
    this.edit = !this.edit;
    this.editText = item.acercademi;
  }

  editItem(content : string){
    this.general.acercademi = content;
    this.edit = false;
    console.log(content);
  }

}
