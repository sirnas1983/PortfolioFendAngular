import { Component, Input, OnInit } from '@angular/core';
import { Conocimiento } from 'src/app/interfaces';

@Component({
  selector: 'app-conocimientos-form',
  templateUrl: './conocimientos-form.component.html',
  styleUrls: ['./conocimientos-form.component.css']
})
export class ConocimientosFormComponent implements OnInit {
@Input() editarConocimiento : Conocimiento = {
  nombre : "",
  institucion : "",
  area : "",
  nivel : "",
  duracion : 0,
  descripcion : ""
};

  constructor() { }

  ngOnInit(): void {
  }

}
