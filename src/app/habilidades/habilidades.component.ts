import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';
import { LoginService } from '../servicios/login.service';
import { Skill } from '../interfaces';
import { ActualizarDatosService } from '../servicios/actualizar-datos.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  isHidden = false;
  softskills : Skill[] = [];
  hardskills : Skill[] = [];
  validate : boolean = this.loginService.validacion;
  showForm : boolean = false;

  constructor(
    private datos:ObtenerDatosService, 
    private loginService:LoginService,
    private actualizar:ActualizarDatosService
    ) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.softskills = data.persona.softskills; this.hardskills = data.persona.hardskills});
  }

  desplegar(){
    document.querySelector("#skills-card .toggle")?.classList.toggle("fa-chevron-down");
    document.querySelector("#skills-card .toggle")?.classList.toggle("fa-chevron-up");
    this.isHidden = !this.isHidden;
  }

  addItem(){
    this.showForm = !this.showForm;
  }

  deleteItem(habilidad : Skill){
    console.log(habilidad);
    if (this.softskills.includes(habilidad)) {
      this.softskills = this.softskills.filter(item => item != habilidad);
    } else {
      this.hardskills = this.hardskills.filter(item => item != habilidad);
    }
  }

  modifyComponent(contenido : Skill){
  let urlString : string;
    if (contenido.type === "soft") {
      this.softskills.push(contenido);
      urlString = '/softSkills/';
      this.showForm = false;
    } else {
      this.hardskills.push(contenido);
      urlString = '/hardSkills/';
      this.showForm = false;
    }
    this.actualizar.actualizarDatos(urlString,contenido).subscribe(
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