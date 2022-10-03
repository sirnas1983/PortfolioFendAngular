import { Component, OnInit } from '@angular/core';
import { Conocimiento } from '../interfaces';
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
  edit : boolean = false;
  conocimiento : Conocimiento = {
    nombre : "",
    institucion : "",
    area : "",
    nivel : "",
    duracion : 0,
    descripcion : ""
  };

  constructor(private datos:ObtenerDatosService, private validacion:LoginService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.conocimientos = data.persona.conocimientos});
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
    document.querySelector("#course-card .toggle")?.classList.toggle("fa-chevron-down");
    document.querySelector("#course-card .toggle")?.classList.toggle("fa-chevron-up");
    this.isHidden = !this.isHidden;
  }

  addItem() {
    this.edit = !this.edit;
    this.reset();
  }
  
  deleteItem(conocimiento : Conocimiento){
    console.log(conocimiento);
    }

  editItem(conocimiento : Conocimiento){
    this.edit = !this.edit;
    this.conocimiento = conocimiento;
  }
}
