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
  usuarioAutenticado : boolean = false;
  
  apiLista='/ver/persona/1';
  apiAgregar='/agregar/persona';
  
  constructor(
    private datos:ObtenerDatosService, 
    private actualizar : ActualizarDatosService,
    private authService : AuthService
   ) 
    {
      this.loading = false;
      this.datos.datos.subscribe(data=>{
        this.persona = data;
      })
      this.authService.currentUser.subscribe(data=>{
        if (data && data.accessToken){
          this.usuarioAutenticado = true;
        } else {
          this.usuarioAutenticado = false;
        }
      }) 
  }
  
   
  ngOnInit(): void {
  }

  edad () {
    const hoy : Date = new Date();
    const nacimiento : Date = new Date(this.persona.fechaNacimiento);
    const edad = hoy.getFullYear() - nacimiento.getFullYear();
    if (hoy.getFullYear() < nacimiento.getFullYear()){
      return 0;
    } else if (hoy.getMonth() < nacimiento.getMonth()){
      return edad - 1;
    } else if (hoy.getMonth() > nacimiento.getMonth()){
      return edad;
    } else if (hoy.getDate() === nacimiento.getDate()){
      return edad;
    } else {
      return edad -1;
    }
  }

  showFormMethod(item : Persona){
  }

  modifyComponent(contenido : PersonaDTO){
    contenido.id = 1;
    this.loading = true;
    this.actualizar.actualizarDatos(this.apiAgregar, contenido).subscribe(
      data => {
        this.datos.obtenerDatos().subscribe(data=>{
        })
        document.getElementById("principalModalCloseButton")?.click();
        this.loading = false;
      },
      error =>  {
        this.loading = false;
        alert("Error en servidor, reintentelo mas tarde!");
        return;
      }
    )
  }

}
