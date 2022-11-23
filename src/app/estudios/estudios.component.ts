import { Component, OnInit } from '@angular/core';
import { Estudio } from '../interfaces';
import { ActualizarDatosService } from '../servicios/actualizar-datos.service';
import { LoginService } from '../servicios/login.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css'],
})
export class EstudiosComponent implements OnInit {

  showForm : boolean = false;
  isHidden = false;
  estudios : Estudio[] = [];
  validate : boolean = this.loginService.validacion;
  estudio : Estudio = {
    id : 0,
    titulo : "",
    institucion : "",
    lugar : "",
    nivel : "",
    fechaInicio: "",
    fechaFin : "",
    promedio : 0,
    link : ""
  };

  reset() {
    this.estudio = {
      id : 0,
      titulo : "",
      institucion : "",
      lugar : "",
      nivel : "",
      fechaInicio: "",
      fechaFin : "",
      promedio : 0,
      link : ""
    };
  }

  constructor(
    private datos:ObtenerDatosService, 
    private loginService:LoginService,
    private actualizar:ActualizarDatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.estudios = data.persona.estudios});
  }

  desplegar(){
    document.querySelector("#knowledge-card .toggle")?.classList.toggle("fa-chevron-down");
    document.querySelector("#knowledge-card .toggle")?.classList.toggle("fa-chevron-up");
    this.isHidden = !this.isHidden;
  }
  
  addItem(){
    this.showForm = !this.showForm;
    this.reset()
  }

  deleteItem(estudio : Estudio){
    console.log(estudio);
    this.estudios = this.estudios.filter(item => {return item !== estudio})
    }

  editItem(estudio: Estudio){
    this.estudio = estudio;
    this.showForm = !this.showForm;
  }

  modifyComponent(contenido : Estudio){
    
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
