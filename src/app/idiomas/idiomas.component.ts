import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

  idiomas : any;
  validate=false;
  constructor(private datos:ObtenerDatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.idiomas = data});
  }

}
