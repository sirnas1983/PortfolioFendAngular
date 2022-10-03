import { Component, OnInit } from '@angular/core';
import { Interes } from '../interfaces';
import { LoginService } from '../servicios/login.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';


@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.css']
})
export class InteresesComponent implements OnInit {
  
  intereses : Interes[] = [];
  validate : boolean = false;
  
  constructor(private datos:ObtenerDatosService, private validacion:LoginService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.intereses = data.persona.intereses});
    this.validacion.login().subscribe(login => {this.validate = login.login});
  }
  
  editItem(interes : Interes){
    console.log(interes);
  }

  deleteItem(interes : Interes){
    console.log(interes.nombre);
  }
}
