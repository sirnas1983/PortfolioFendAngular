import { Component, OnInit } from '@angular/core';
import { Conocimiento } from '../interfaces';
import { ActualizarDatosService } from '../servicios/actualizar-datos.service';
import { AuthService } from '../servicios/auth.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})

export class ConocimientosComponent implements OnInit {

  apiLista='/ver/conocimientos/persona/1';
  apiBorrar='/borrar/conocimiento/';
  apiAgregar='/agregar/conocimiento/1';

  loading : boolean;
  id = 0;
  validate : boolean = false;
  isHidden : boolean = false;
  conocimientos : Conocimiento[] = [];
  showForm : boolean = false;
  conocimiento : Conocimiento = {
    id : 0,
    nombre : "",
    institucion : "",
    area : "",
    nivel : "",
    duracion : 0,
    descripcion : ""
  };

  constructor(
    private datos:ObtenerDatosService, 
    private actualizar:ActualizarDatosService,
    private authService : AuthService
    ) { 
      this.loading = false;
      this.datos.datos.subscribe(data=>{
        this.conocimientos = data.listaConocimientos; 
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

  reset(){
    this.conocimiento = {
      id : 0,
      nombre : "",
      institucion : "",
      area : "",
      nivel : "",
      duracion : 0,
      descripcion : ""
    };
  }

  desplegar(){
    document.querySelector("#course-card .toggle")?.classList.toggle("fa-chevron-up");
    document.querySelector("#course-card .toggle")?.classList.toggle("fa-chevron-down");
    this.isHidden = !this.isHidden;
  }

  newItem() {
    this.showForm = !this.showForm;
    this.reset();
  }
  
  editItem(conocimiento : Conocimiento){
    this.showForm = !this.showForm;
    this.id = conocimiento.id;
    this.conocimiento = conocimiento;
  }

  modifyComponent(contenido : Conocimiento){
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

  deleteItem(contenido : Conocimiento){
    this.loading = true;
    this.actualizar.borrarDatos(this.apiBorrar + `${contenido.id}`).subscribe(
      data=>{
        this.loading = false;
        this.conocimientos = this.conocimientos.filter(item => item != contenido);
      },
      error => {
        this.loading = false;
      }
    )
  }
}
