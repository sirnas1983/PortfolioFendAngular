import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';
import { Idioma } from '../interfaces'


@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

  arrow = 'btn fa-solid float-end fa-chevron-up';
  mostrar = 'block';
  isHidden = false;
  idiomas : Idioma[] = [];
  validate : boolean = false;
    
  constructor(private datos:ObtenerDatosService, private validacion:LoginService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.idiomas = data.idiomas});
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

deleteItem(idioma : Idioma){
  console.log(idioma);
}
  
  editItem(idioma : Idioma){
    console.log(idioma);
  }
}



