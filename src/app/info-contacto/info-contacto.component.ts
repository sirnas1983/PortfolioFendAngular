import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces';
import { AuthService } from '../servicios/auth.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-info-contacto',
  templateUrl: './info-contacto.component.html',
  styleUrls: ['./info-contacto.component.css']
})
export class InfoContactoComponent implements OnInit {

  persona : Persona = new Persona();
  usuarioAutenticado : boolean = false;
 
  constructor(
    private datos:ObtenerDatosService,
    private authService : AuthService) { 
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
  
  editItem(persona : Persona){
  }
}
