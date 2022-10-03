import { Component, OnInit } from '@angular/core';
import { Estudio } from '../interfaces';
import { LoginService } from '../servicios/login.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css'],
})
export class EstudiosComponent implements OnInit {

  edit : boolean = false;
  isHidden = false;
  estudios : Estudio[] = [];
  validate : boolean = false;
  estudio : Estudio = {
    titulo : "",
    institucion : "",
    lugar : "",
    nivel : "",
    fechaInicio: new Date(""),
    fechaFin : new Date(""),
    promedio : 0,
    link : ""
  };

  reset() {
    this.estudio = {
      titulo : "",
      institucion : "",
      lugar : "",
      nivel : "",
      fechaInicio: new Date(""),
      fechaFin : new Date(""),
      promedio : 0,
      link : ""
    };
  }

  constructor(private datos:ObtenerDatosService, private validacion:LoginService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.estudios = data.persona.estudios});
    this.validacion.login().subscribe(login => {this.validate = login.login});
  }

  desplegar(){
    document.querySelector("#knowledge-card .toggle")?.classList.toggle("fa-chevron-down");
    document.querySelector("#knowledge-card .toggle")?.classList.toggle("fa-chevron-up");
    this.isHidden = !this.isHidden;
  }
  
  addItem(){
    this.edit = !this.edit;
    this.reset()
  }

  deleteItem(estudio : Estudio){
    console.log(estudio);
    }

  editItem(estudio: Estudio){
    this.estudio = estudio;
    this.edit = !this.edit;
  }
}
