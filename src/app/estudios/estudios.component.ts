import { Component, OnInit } from '@angular/core';
import { Estudio } from '../interfaces';
import { ActualizarDatosService } from '../servicios/actualizar-datos.service';
import { AuthService } from '../servicios/auth.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css'],
})
export class EstudiosComponent implements OnInit {

  apiLista='/ver/estudios/persona/1';
  apiBorrar='/borrar/estudio/';
  apiAgregar='/agregar/estudio/1';

  id = 0;

  showForm : boolean = false;
  isHidden = false;
  estudios : Estudio[] = [];
  validate : boolean = false;
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
    private actualizar:ActualizarDatosService,
    private authService : AuthService) { 
      this.datos.datos.subscribe(data=>{
        this.estudios = data.listaEstudios; 
      })
      this.authService.currentUser.subscribe(data=>{
        if (data && data.accessToken){
          this.validate = true;
        } else {
          this.validate = false;
        }
      })
    }

  ngOnInit(): void {
  }

  desplegar(){
    document.querySelector("#knowledge-card .toggle")?.classList.toggle("fa-chevron-down");
    document.querySelector("#knowledge-card .toggle")?.classList.toggle("fa-chevron-up");
    this.isHidden = !this.isHidden;
  }
  
  addItem(){
    this.showForm = !this.showForm;
    this.reset();
  }

  editItem(estudio: Estudio){
    this.estudio = estudio;
    this.id = estudio.id;
    this.showForm = !this.showForm;
  }

  modifyComponent(contenido : Estudio){
    contenido.id = this.id;
    this.actualizar.actualizarDatos(this.apiAgregar, contenido).subscribe(
      data => {
        console.log(contenido);
        this.datos.actualizarLista(this.apiLista).subscribe(data=>{
          this.estudios = data;
        });
        this.showForm = false;
        this.id = 0;
      },
      error =>  {
        alert(error.status + "-" + error.statusText + "- Error en servidor, reintentelo mas tarde!")
        return;
      }
    )
  }

  deleteItem(contenido : Estudio){
    this.actualizar.borrarDatos(this.apiBorrar + `${contenido.id}`).subscribe(
      data=>{
        this.estudios = this.estudios.filter(item => item != contenido);
      }
    )
  }
}
