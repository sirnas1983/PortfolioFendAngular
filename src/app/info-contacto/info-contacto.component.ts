import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { Persona } from '../interfaces';
import { LoginService } from '../servicios/login.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-info-contacto',
  templateUrl: './info-contacto.component.html',
  styleUrls: ['./info-contacto.component.css']
})
export class InfoContactoComponent implements OnInit {

  persona : Persona = new Persona();
  validate : boolean = this.loginService.validacion;
 
  constructor(private datos:ObtenerDatosService, private loginService:LoginService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.persona = data.persona});
  }
  
  editItem(persona : Persona){
    console.log(persona);
  }
}
