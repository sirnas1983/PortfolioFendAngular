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

  arrow = 'btn fa-solid float-end fa-chevron-up';
  mostrar = 'block';
  isHidden = false;
  softskills : Skill[] = [];
  hardskills : Skill[] = [];
  validate: boolean = false;

  constructor(private datos:ObtenerDatosService, private validacion:LoginService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.softskills = data.softskills; this.hardskills = data.hardskills});
    this.validacion.login().subscribe(login => {this.validate = login.login});
  }

  desplegar(){
    this.isHidden = !this.isHidden;
    if (this.isHidden) {
      this.arrow = "btn fa-solid float-end fa-chevron-down"
    } else {
      this.arrow = "btn fa-solid float-end fa-chevron-up"
    }
  }

  deleteItem(habilidad : Skill){
  console.log(habilidad);   
  }
}