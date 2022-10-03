import { Component, OnInit, Input } from '@angular/core';
import { Estudio } from 'src/app/interfaces';

@Component({
  selector: 'app-estudios-form',
  templateUrl: './estudios-form.component.html',
  styleUrls: ['./estudios-form.component.css']
})
export class EstudiosFormComponent implements OnInit {
  
  @Input() editarEstudio : Estudio = {
    titulo : "",
    institucion : "",
    lugar : "",
    nivel : "",
    fechaInicio: new Date(""),
    fechaFin : new Date(""),
    promedio : 0,
    link : ""
  };
  constructor() { }

  ngOnInit(): void {
  }

}
