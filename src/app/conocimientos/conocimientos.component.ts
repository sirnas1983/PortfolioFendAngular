import { Component, OnInit } from '@angular/core';
import { Conocimiento } from '../interfaces';
import { ActualizarDatosService } from '../servicios/actualizar-datos.service';
import { LoginService } from '../servicios/login.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})

export class ConocimientosComponent implements OnInit {
  
  isHidden : boolean = false;
  validate : boolean = false; 
  conocimientos : Conocimiento[] = [];
  showForm : boolean = false;
  conocimiento : Conocimiento = {
    nombre : "",
    institucion : "",
    area : "",
    nivel : "",
    duracion : 0,
    descripcion : ""
  };

  constructor(
    private datos:ObtenerDatosService, 
    private validacion:LoginService,
    private actualizar:ActualizarDatosService
    ) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe((data) => {
      if (!data) {throw Error("Error en carga de datos")} else {
      this.conocimientos = data.persona.conocimientos;
    }}, 
      (error) => {alert("Error en servidor, sepa disculpar las molestias")
  });
    this.validacion.login().subscribe(login => {this.validate = login.login});
  }

  reset(){
    this.conocimiento = {
      nombre : "",
      institucion : "",
      area : "",
      nivel : "",
      duracion : 0,
      descripcion : ""
    };
  }

  desplegar(){
    document.querySelector("#course-card .toggle")?.classList.toggle("fa-chevron-up");
    document.querySelector("#course-card .toggle")?.classList.toggle("fa-chevron-down");
    this.isHidden = !this.isHidden;
  }

  newItem() {
    this.showForm = !this.showForm;
    this.reset();
  }
  
  deleteItem(conocimiento : Conocimiento){
    this.conocimientos = this.conocimientos.filter(item => item != conocimiento);
    }

  editItem(conocimiento : Conocimiento){
    this.showForm = !this.showForm;
    this.conocimiento = conocimiento;
  }

  modifyComponent(contenido : Conocimiento){
    
    this.actualizar.actualizarDatos('/conocimientos/',contenido).subscribe(
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
