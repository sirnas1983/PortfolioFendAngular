import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces';
import { ActualizarDatosService } from '../servicios/actualizar-datos.service';
import { LoginService } from '../servicios/login.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {

  persona = new Persona();

  isHidden = false;
  editText : string = "";
  validate : boolean = this.loginService.validacion;
  edit : boolean = false;

  constructor(private datos:ObtenerDatosService, private loginService:LoginService, private actualizar:ActualizarDatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe((data) => {
      if (!data) {throw Error("Error en carga de datos")} else {
      this.persona = data.persona;
    }}, 
    (error) => {alert("Error en servidor, sepa disculpar las molestias")});
  }

  desplegar(){
    const boton : any = document.querySelector("#aboutme-card .toggle");
    boton.classList?.toggle("fa-chevron-down");
    boton.classList?.toggle("fa-chevron-up");
    this.isHidden = !this.isHidden;
  }

  }


