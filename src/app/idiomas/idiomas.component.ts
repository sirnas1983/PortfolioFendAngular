import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';
import { Idioma } from '../interfaces'
import { ActualizarDatosService } from '../servicios/actualizar-datos.service';
import { AuthService } from '../servicios/auth.service';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
  
  apiLista='/ver/idiomas/persona/1';
  apiBorrar='/borrar/idioma/';
  apiAgregar='/agregar/idioma/1';
  isHidden = false;

  id = 0;
  loading : boolean;
  idiomas : Idioma[] = [];
  validate : boolean = false;
  showForm : boolean = false;
  idioma : Idioma = {
    id : 0,
    idioma : "",
    escrito : "",
    oral : "",
    comprension: ""
  };

  reset() {
    this.idioma = {
      id : 0,
      idioma : "",
      escrito : "",
      oral : "",
      comprension: ""
    };
  }

    
  constructor(
    private datos:ObtenerDatosService, 
    private actualizar:ActualizarDatosService,
    private authService : AuthService,
    private scroller : ViewportScroller
    ) {
      this.loading=false; 
      this.datos.datos.subscribe(data=>{
        this.idiomas = data.listaIdiomas;
      });
      this.authService.currentUser.subscribe(data=>{
        if (data && data.accessToken){
          this.validate = true;
        } else {
          this.validate = false;
          this.showForm = false;
        }
      });
    }


  ngOnInit(): void {
  }

  desplegar(){
    document.querySelector("#language-card .toggle")?.classList.toggle("fa-chevron-down");
    document.querySelector("#language-card .toggle")?.classList.toggle("fa-chevron-up");
    this.isHidden = !this.isHidden;
  }

  addItem(){
    this.showForm = !this.showForm;
    this.reset()
  }

  editItem(idioma : Idioma){
    this.idioma = idioma;
    this.id = idioma.id;
    this.showForm = !this.showForm;
  }

  modifyComponent(contenido : Idioma){
    this.scroller.scrollToAnchor('language-card');
    contenido.id = this.id;
    this.loading = true;
    this.showForm = false;
    this.actualizar.actualizarDatos(this.apiAgregar, contenido).subscribe(
      data => {
        this.datos.obtenerDatos().subscribe(data=>{
          
        })
        this.loading = false;
        this.id = 0;
      },
      error =>  {
        this.showForm = true;
        this.loading = false;
        alert("Error en servidor, reintentelo mas tarde!");
        return;
      }
    )
}

  deleteItem(contenido : Idioma){
    this.loading = true;
    this.actualizar.borrarDatos(this.apiBorrar + `${contenido.id}`).subscribe(
      data=>{
        this.idiomas = this.idiomas.filter(item => item != contenido);
        this.loading = false;
      },
      error => {
        this.loading = false;
        alert("Error en servidor, reintentelo mas tarde!");
      }
    )
  }
}



