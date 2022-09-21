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

  arrow = 'btn fa-solid float-end fa-chevron-up';
  mostrar = 'block';
  isHidden = false;
  experiencias : Experiencia[] = [];
  validate: boolean = false;


  constructor(private datos:ObtenerDatosService, private validacion : LoginService) {}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.experiencias = data.experiencias});
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
  
  deleteItem(experiencia : Experiencia){
    console.log(experiencia);
    }

  editItem(experiencia: Experiencia){
    console.log(experiencia);
    }

}
