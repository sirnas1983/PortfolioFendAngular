import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces';
import { ActualizarDatosService } from '../servicios/actualizar-datos.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';
import { TokenStorageService } from '../servicios/token-storage.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {

  persona = new Persona();
  validate : boolean = this.tokenService.isLogged();
  isHidden = false;
  editText : string = "";
  edit : boolean = false;

  constructor(private datos:ObtenerDatosService, 
              private actualizar:ActualizarDatosService,
              private tokenService:TokenStorageService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe((data) => {
      if (!data) {throw Error("Error en carga de datos")} else {
      this.persona = data;
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


