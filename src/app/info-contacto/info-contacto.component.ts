import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-info-contacto',
  templateUrl: './info-contacto.component.html',
  styleUrls: ['./info-contacto.component.css']
})
export class InfoContactoComponent implements OnInit {

  contacto : any;
  validate=false;
  constructor(private datos:ObtenerDatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.contacto = data});
  }
}
