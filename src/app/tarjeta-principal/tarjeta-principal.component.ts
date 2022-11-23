import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces';
import { ActualizarDatosService } from '../servicios/actualizar-datos.service';
import { LoginService } from '../servicios/login.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-tarjeta-principal',
  templateUrl: './tarjeta-principal.component.html',
  styleUrls: ['./tarjeta-principal.component.css']
})

export class TarjetaPrincipalComponent implements OnInit {

  persona = new Persona();
  showForm  = false;
  validate : boolean = this.loginService.validacion;
  
  constructor(
    private datos:ObtenerDatosService, 
    private loginService:LoginService, 
    private actualizar : ActualizarDatosService) { 
  }
  
   
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.persona = data.persona;
    });
   
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
    
    this.persona = contenido;
    this.actualizar.actualizarDatos('/persona',this.persona).subscribe(
            data => {
              if(!data.ok){
              throw Error("Error en servidor, reintentelo mas tarde!");
            } else {
              console.log(data);
              this.showForm = false;
            }
            },
            error =>  {
              alert(error/*error.status + "-" + error.statusText + "- Error en servidor, reintentelo mas tarde!"*/)
              return;
            }
    )}
}
