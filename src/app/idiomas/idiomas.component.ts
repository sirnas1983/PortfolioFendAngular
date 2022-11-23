import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';
import { Idioma } from '../interfaces'
import { ActualizarDatosService } from '../servicios/actualizar-datos.service';


@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

  isHidden = false;
  idiomas : Idioma[] = [];
  validate : boolean = this.loginService.validacion;
  showForm : boolean = false;
  idioma : Idioma = {
    id : 0,
    idioma : "",
    escrito : "",
    oral : "",
    comprension: ""
  };

  reset() {
    this.idioma = {
      id : 0,
      idioma : "",
      escrito : "",
      oral : "",
      comprension: ""
    };
  }

    
  constructor(
    private datos:ObtenerDatosService, 
    private loginService:LoginService,
    private actualizar:ActualizarDatosService) { }


  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.idiomas = data.persona.idiomas});
 }

 desplegar(){
  document.querySelector("#language-card .toggle")?.classList.toggle("fa-chevron-down");
  document.querySelector("#language-card .toggle")?.classList.toggle("fa-chevron-up");
  this.isHidden = !this.isHidden;
}

addItem(){
  this.showForm = !this.showForm;
  this.reset()
}

deleteItem(idioma : Idioma){
  this.idiomas = this.idiomas.filter(item => {return item !== idioma})
  console.log(idioma);
}
  
  editItem(idioma : Idioma){
    this.idioma = idioma;
    this.showForm = !this.showForm;
  }

  modifyComponent(contenido : Idioma){
    this.actualizar.actualizarDatos('/idiomas/',contenido).subscribe(
      data => {
        if(!data.ok){
        throw Error("Error en servidor, reintentelo mas tarde!");
      } else {
        console.log(data);
        this.showForm = false;
      }},
      error =>  {
        alert(error.status + "-" + error.statusText + "- Error en servidor, reintentelo mas tarde!");
      }
    )}

}



