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
  id = 1;
  showForm  = false;
  validate : boolean = false;
  
  apiLista='/ver/persona/1';
  apiAgregar='/agregar/persona';
  
  constructor(
    private datos:ObtenerDatosService, 
    private actualizar : ActualizarDatosService,
    private authService : AuthService) {
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
    console.log(item);
  }

  modifyComponent(contenido : Persona){
    contenido.id = this.id;
    console.log(contenido);
    this.actualizar.actualizarDatos(this.apiAgregar, contenido).subscribe(
      data => {
        console.log(contenido);
        console.log(data);
        this.datos.actualizarLista(this.apiLista).subscribe(data=>{
          this.persona = data;
        });
      },
      error =>  {
        alert(error.status + "-" + error.statusText + "- Error en servidor, reintentelo mas tarde!")
        return;
      }
    )
  }

}
