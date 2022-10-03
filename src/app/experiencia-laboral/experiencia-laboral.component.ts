import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../interfaces';
import { LoginService } from '../servicios/login.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})

export class ExperienciaLaboralComponent implements OnInit {

  isHidden = false;
  experiencias : Experiencia[] = [];
  validate: boolean = false;


  constructor(private datos:ObtenerDatosService, private validacion : LoginService) {}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.experiencias = data.persona.experiencias});
    this.validacion.login().subscribe(login => {this.validate = login.login});
  }

  desplegar(){
    document.querySelector("#expertize-card .toggle")?.classList.toggle("fa-chevron-down");
    document.querySelector("#expertize-card .toggle")?.classList.toggle("fa-chevron-up");
    this.isHidden = !this.isHidden;
  }
  
  deleteItem(experiencia : Experiencia){
    this.experiencias = this.experiencias.filter(item => {return item !== experiencia})
    console.log(experiencia);
    }

  editItem(experiencia: Experiencia){
    console.log(experiencia);
    }

}
