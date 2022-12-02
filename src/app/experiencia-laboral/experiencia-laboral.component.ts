import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../interfaces';
import { ActualizarDatosService } from '../servicios/actualizar-datos.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';
import { TokenStorageService } from '../servicios/token-storage.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})

export class ExperienciaLaboralComponent implements OnInit {

  isHidden = false;
  experiencias : Experiencia[] = [];
  validate : boolean = this.tokenService.isLogged();
  showForm : boolean = false;
  experiencia : Experiencia = {
    id : 0,
    nombre : "",
    empresa : "",
    tareas : "",
    fechaInicio: "",
    fechaFin : "",
    link : "",
    lugar : ""
  };

  reset() {
    this.experiencia = {
      id : 0,
      nombre : "",
      empresa : "",
      tareas : "",
      fechaInicio: "",
      fechaFin : "",
      link : "",
      lugar : ""
    };
  }

  constructor(
    private datos:ObtenerDatosService, 
    private actualizar:ActualizarDatosService,
    private tokenService : TokenStorageService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.experiencias = data.experiencias});
  
  }

  desplegar(){
    document.querySelector("#expertize-card .toggle")?.classList.toggle("fa-chevron-down");
    document.querySelector("#expertize-card .toggle")?.classList.toggle("fa-chevron-up");
    this.isHidden = !this.isHidden;
  }

  addItem(){
    this.showForm = !this.showForm;
    this.reset()
  }
  
  deleteItem(experiencia : Experiencia){
    this.experiencias = this.experiencias.filter(item => {return item !== experiencia})
    console.log(experiencia);
    }

  editItem(experiencia: Experiencia){
    this.experiencia = experiencia;
    this.showForm = !this.showForm;
    }

  modifyComponent(contenido : Experiencia){
  
    this.actualizar.actualizarDatos('/experiencias/',contenido).subscribe(
      data => {
        if(!data.ok){
        throw Error("Error en servidor, reintentelo mas tarde!");
      } else {
        console.log(data);
        this.showForm = false;
      }},
      error =>  {
        alert(error.status + "-" + error.statusText + "- Error en servidor, reintentelo mas tarde!")
        return;
      }
    )}

}
