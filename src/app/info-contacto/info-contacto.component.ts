import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';
import { TokenStorageService } from '../servicios/token-storage.service';

@Component({
  selector: 'app-info-contacto',
  templateUrl: './info-contacto.component.html',
  styleUrls: ['./info-contacto.component.css']
})
export class InfoContactoComponent implements OnInit {

  persona : Persona = new Persona();
  validate : boolean = this.tokenService.isLogged();
 
  constructor(
    private datos:ObtenerDatosService,
    private tokenService : TokenStorageService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.persona = data});
  }
  
  editItem(persona : Persona){
    console.log(persona);
  }
}
