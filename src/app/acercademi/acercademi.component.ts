import { Component, OnInit } from '@angular/core';
import { General } from '../interfaces';
import { LoginService } from '../servicios/login.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {

  arrow = 'btn fa-solid float-end fa-chevron-up';
  mostrar = 'block';
  isHidden = false;
  general : General[] = [];   
  validate : boolean = false; 

  constructor(private datos:ObtenerDatosService, private validacion:LoginService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.general = data.general});
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

  editItem(acercademi : General){
    console.log(acercademi);
  }

}
