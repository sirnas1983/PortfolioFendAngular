import { Component, OnInit } from '@angular/core';
import { Estudio } from '../interfaces';
import { LoginService } from '../servicios/login.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css'],
})
export class EstudiosComponent implements OnInit {

  arrow = 'btn fa-solid float-end fa-chevron-up';
  mostrar = 'block';
  isHidden = false;
  estudios : Estudio[] = [];
  validate : boolean = false;

  constructor(private datos:ObtenerDatosService, private validacion:LoginService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.estudios = data.estudios});
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
  
  deleteItem(estudio : Estudio){
    console.log(estudio);
    }

  editItem(estudio: Estudio){
    console.log(estudio);
  }
}
