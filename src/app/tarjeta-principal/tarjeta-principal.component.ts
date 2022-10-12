import { Component, OnInit } from '@angular/core';
import { General, Personas } from '../interfaces';
import { ActualizarDatosService } from '../servicios/actualizar-datos.service';
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
    fechaNacimiento : "",
    whatsapp : "",
    email : "",
    repositorio : "",
    acercademi : "",
    facebook : "",
    instagram : "",
    tweeter : "",
}; 

persona = new Personas();

  showForm  = false;
  validate  = false;
  
  constructor(
    private datos:ObtenerDatosService, 
    private validacion:LoginService, 
    private actualizar : ActualizarDatosService) { 
  }
  
   
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.general = data.persona.general;
      this.persona = data.persona;
    });
    this.validacion.login().subscribe(login => {
      this.validate = login.login
    });
  }

  edad (){
    const hoy : Date = new Date();
    const nacimiento : Date = new Date(this.general.fechaNacimiento);
    if ((nacimiento.getMonth() < hoy.getMonth()) || (hoy.getMonth() == nacimiento.getMonth() && nacimiento.getDate() <= hoy.getDate())) {
      return Math.floor(hoy.getFullYear() - nacimiento.getFullYear())
    } 
      return Math.floor(hoy.getFullYear() - nacimiento.getFullYear() + 1)
  }

  showFormMethod(item : General){
    this.showForm = !this.showForm;
    console.log(item);
  }

  modifyComponent(contenido : General){
    
    this.persona.general = contenido;
    this.actualizar.actualizarDatos('/general',this.persona.general).subscribe(
            data => {
              if(!data.ok){
              throw Error("Error en servidor, reintentelo mas tarde!");
            } else {
              console.log(data);
              this.showForm = false;
            }
            },
            error =>  {
              alert(error/*error.status + "-" + error.statusText + "- Error en servidor, reintentelo mas tarde!"*/)
              return;
            }
    )}
}
