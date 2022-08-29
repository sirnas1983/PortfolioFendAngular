import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-tarjeta-principal',
  templateUrl: './tarjeta-principal.component.html',
  styleUrls: ['./tarjeta-principal.component.css']
})
export class TarjetaPrincipalComponent implements OnInit {
  general : any;
  validate = false;
  
  constructor(private datos:ObtenerDatosService) { 
  }

  edad () {
    var hoy : any = new Date();
    var nacimiento : any = new Date(this.general.nacimiento);
    console.log(nacimiento);
    console.log(hoy);
    return Math.floor((hoy - nacimiento)/365/24/60/60/1000);
  }
  
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.general = data});
    let edad = 0;
  }


}
