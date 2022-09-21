import { Component, OnInit } from '@angular/core';
import { Conocimiento } from '../interfaces';
import { LoginService } from '../servicios/login.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})

export class ConocimientosComponent implements OnInit {
  
  arrow : string = 'btn fa-solid float-end fa-chevron-up';
  mostrar : string = 'block';
  isHidden : boolean = false;
  validate : boolean = false; 
  conocimientos : Conocimiento[] = [];

  constructor(private datos:ObtenerDatosService, private validacion:LoginService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.conocimientos = data.conocimientos});
    this.validacion.login().subscribe(login => {this.validate = login.login});
  }

  
  desplegar(){
    this.isHidden = !this.isHidden;
    if (this.isHidden) {
      this.arrow = "btn fa-solid float-end fa-chevron-down"
    } else {
      this.arrow = "btn fa-solid float-end fa-chevron-up"
    }
  }
  
  deleteItem(conocimiento : Conocimiento){
    console.log(conocimiento);
    }

  editItem(conocimiento : Conocimiento){
    console.log(conocimiento);
  }
}
