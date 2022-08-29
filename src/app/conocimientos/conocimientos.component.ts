import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})

export class ConocimientosComponent implements OnInit {
  validate=false; 
  conocimientos : any;

  constructor(private datos:ObtenerDatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.conocimientos = data});
  }
}
