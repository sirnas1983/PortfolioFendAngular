import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Estudio } from 'src/app/interfaces';

@Component({
  selector: 'app-estudios-form',
  templateUrl: './estudios-form.component.html',
  styleUrls: ['./estudios-form.component.css']
})
export class EstudiosFormComponent implements OnInit {
  @Output() actualizarValor = new EventEmitter<Estudio>();
  @Input() editarEstudio : Estudio = {
    titulo : "",
    institucion : "",
    lugar : "",
    nivel : "",
    fechaInicio: "",
    fechaFin : "",
    promedio : 0,
    link : ""
  };

  estudiosForm = this.fb.group({
    titulo : [""],
    institucion : [""],
    lugar : [""],
    nivel : [""],
    fechaInicio : [''],
    fechaFin : [''],
    promedio : [''],
    link : ['']
})

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.estudiosForm.setValue(JSON.parse(JSON.stringify(this.editarEstudio)))
  }

  modifyComponent() {
    this.editarEstudio = JSON.parse(JSON.stringify(this.estudiosForm.value));
    this.actualizarValor.emit(this.editarEstudio);
  }


}
