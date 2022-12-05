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
    id:0,
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
    fechaFin : [""],
    link : [""],
    lugar : [""]
})
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.experienciasForm.controls.nombre.setValue(this.editarExperiencia.nombre);
    this.experienciasForm.controls.empresa.setValue(this.editarExperiencia.empresa);
    this.experienciasForm.controls.tareas.setValue(this.editarExperiencia.tareas);
    this.experienciasForm.controls.link.setValue(this.editarExperiencia.link);
    this.experienciasForm.controls.fechaInicio.setValue(this.editarExperiencia.fechaInicio);
    this.experienciasForm.controls.fechaFin.setValue(this.editarExperiencia.fechaFin);
    this.experienciasForm.controls.lugar.setValue(this.editarExperiencia.lugar);
  }

  modifyComponent() {
    this.editarExperiencia = JSON.parse(JSON.stringify(this.experienciasForm.value));
    this.experienciasForm.reset();
    this.actualizarValor.emit(this.editarExperiencia);
  }

}
