import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Persona, PersonaDTO } from '../interfaces';
import { ActualizarDatosService } from '../servicios/actualizar-datos.service';
import { AuthService } from '../servicios/auth.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-tarjeta-principal',
  templateUrl: './tarjeta-principal.component.html',
  styleUrls: ['./tarjeta-principal.component.css']
})

export class TarjetaPrincipalComponent implements OnInit {

  persona = new Persona();
  personaDto : PersonaDTO = {
    id : 0,
    nombre : "",
	  ocupacion : "",
	  descripcion : "",
	  foto : "",
	  banner : "",
	  fechaNacimiento : "",
	  whatsapp : "",
	  email : "",
	  repositorio : "",
	  acercademi : "",
    facebook : "",
    instagram : "",
    tweeter : ""
  }

  loading : boolean;
  id = 1;
  showForm  = false;
  validate : boolean = false;
  
  apiLista='/ver/persona/1';
  apiAgregar='/agregar/persona';
  
  constructor(
    private datos:ObtenerDatosService, 
    private actualizar : ActualizarDatosService,
    private authService : AuthService,
    private scroller : ViewportScroller
   ) 
    {
      this.loading = false;
      this.datos.datos.subscribe(data=>{
        this.persona = data;
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

  edad (){
    const hoy : Date = new Date();
    const nacimiento : Date = new Date(this.persona.fechaNacimiento);
    if ((nacimiento.getMonth() < hoy.getMonth()) || (hoy.getMonth() == nacimiento.getMonth() && nacimiento.getDate() <= hoy.getDate())) {
      return Math.floor(hoy.getFullYear() - nacimiento.getFullYear())
    } 
      return Math.floor(hoy.getFullYear() - nacimiento.getFullYear() + 1)
  }

  showFormMethod(item : Persona){
    this.showForm = !this.showForm;
  }

  modifyComponent(contenido : PersonaDTO){
    this.scroller.scrollToAnchor('info-foto');
    contenido.id = 1;
    this.loading = true;
    this.showForm = false;
    this.actualizar.actualizarDatos(this.apiAgregar, contenido).subscribe(
      data => {
        this.datos.obtenerDatos().subscribe(data=>{
        })
        this.loading = false;
      },
      error =>  {
        this.showForm = true;
        this.loading = false;
        alert("Error en servidor, reintentelo mas tarde!");
        return;
      }
    )
  }

}
