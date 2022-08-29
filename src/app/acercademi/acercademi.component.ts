import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {

  principales : any;
  validate=false; 
  constructor(private datos:ObtenerDatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.principales = data});
  }
}
