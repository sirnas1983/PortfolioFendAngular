import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Experiencia } from 'src/app/interfaces';

@Component({
  selector: 'app-experiencia-laboral-form',
  templateUrl: './experiencia-laboral-form.component.html',
  styleUrls: ['./experiencia-laboral-form.component.css']
})
export class ExperienciaLaboralFormComponent implements OnInit {

  @Output() actualizarValor = new EventEmitter<Experiencia>();
  @Input() editarExperiencia : Experiencia = {
    nombre : "",
    empresa : "",
    tareas : "",
    fechaInicio: "",
    fechaFin : "",
    link : "",
    lugar : ""
  };

  experienciasForm = this.fb.group({
    nombre : [""],
    empresa : [""],
    tareas : [""],
    fechaInicio : [""],
    fechaFin : [''],
    link : [''],
    lugar : ['']
})
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.experienciasForm.setValue(JSON.parse(JSON.stringify(this.editarExperiencia)))
  }

  modifyComponent() {
    this.editarExperiencia = JSON.parse(JSON.stringify(this.experienciasForm.value));
    this.actualizarValor.emit(this.editarExperiencia);
  }

}
