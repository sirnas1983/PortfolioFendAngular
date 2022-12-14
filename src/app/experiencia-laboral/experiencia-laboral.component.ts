import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../interfaces';
import { ActualizarDatosService } from '../servicios/actualizar-datos.service';
import { AuthService } from '../servicios/auth.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})

export class ExperienciaLaboralComponent implements OnInit {

  id = 0;

  apiLista='/ver/experiencias/persona/1';
  apiBorrar='/borrar/experiencia/';
  apiAgregar='/agregar/experiencia/1';
  loading : boolean;
  isHidden = false;
  experiencias : Experiencia[] = [];
  validate : boolean = false;
  showForm : boolean = false;
  experiencia : Experiencia = {
    id : 0,
    nombre : "",
    empresa : "",
    tareas : "",
    fechaInicio: "",
    fechaFin : "",
    link : "",
    lugar : ""
  };

  reset() {
    this.experiencia = {
      id : 0,
      nombre : "",
      empresa : "",
      tareas : "",
      fechaInicio: "",
      fechaFin : "",
      link : "",
      lugar : ""
    };
  }

  constructor(
    private datos:ObtenerDatosService, 
    private actualizar:ActualizarDatosService,
    private authService : AuthService) {
      this.loading = false; 
      this.datos.datos.subscribe(data=>{
        this.experiencias = data.listaExperiencias; 
      })
      this.authService.currentUser.subscribe(data=>{
        if (data && data.accessToken){
          this.validate = true;
        } else {
          this.validate = false;
          this.showForm = false;
        }
      })
    }

  ngOnInit(): void {
  }

  desplegar(){
    document.querySelector("#expertize-card .toggle")?.classList.toggle("fa-chevron-down");
    document.querySelector("#expertize-card .toggle")?.classList.toggle("fa-chevron-up");
    this.isHidden = !this.isHidden;
  }

  addItem(){
    this.showForm = !this.showForm;
    this.reset()
  }

  editItem(contenido : Experiencia){
    this.experiencia = contenido;
    this.id = contenido.id;
    this.showForm = !this.showForm;
  }
  
  modifyComponent(contenido : Experiencia){
    contenido.id = this.id;
    this.showForm = false;
    this.loading = true;
    this.actualizar.actualizarDatos(this.apiAgregar, contenido).subscribe(
      data => {
        this.datos.obtenerDatos().subscribe(data=>{
        this.loading = false;
        })
        this.id = 0;
      },
      error =>  {
        this.showForm = true;
        this.loading = false;
        alert("Error en servidor, reintentelo mas tarde!")
        return;
      }
    )
  }

  deleteItem(contenido : Experiencia){
    this.loading = true;

    this.actualizar.borrarDatos(this.apiBorrar + `${contenido.id}`).subscribe(
      data=>{
        this.loading = false;
        this.experiencias = this.experiencias.filter(item => item != contenido);
      },
      error =>{
        this.loading = false;
      }
    )
  }
}
