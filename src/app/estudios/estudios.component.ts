import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css'],
})
export class EstudiosComponent implements OnInit {
  estudios : any;
  validate=false;
  constructor(private datos:ObtenerDatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.estudios = data});
  }
}
