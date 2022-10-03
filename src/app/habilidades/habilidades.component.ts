import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';
import { LoginService } from '../servicios/login.service';
import { Skill } from '../interfaces';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  isHidden = false;
  softskills : Skill[] = [];
  hardskills : Skill[] = [];
  validate: boolean = false;

  constructor(private datos:ObtenerDatosService, private validacion:LoginService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.softskills = data.persona.softskills; this.hardskills = data.persona.hardskills});
    this.validacion.login().subscribe(login => {this.validate = login.login});
  }

  desplegar(){
    document.querySelector("#skills-card .toggle")?.classList.toggle("fa-chevron-down");
    document.querySelector("#skills-card .toggle")?.classList.toggle("fa-chevron-up");
    this.isHidden = !this.isHidden;
  }

  deleteItem(habilidad : Skill){
  console.log(habilidad);   
  }
}