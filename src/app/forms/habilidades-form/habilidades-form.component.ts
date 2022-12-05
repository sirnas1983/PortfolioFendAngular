import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Skill } from 'src/app/interfaces';

@Component({
  selector: 'app-habilidades-form',
  templateUrl: './habilidades-form.component.html',
  styleUrls: ['./habilidades-form.component.css']
})
export class HabilidadesFormComponent implements OnInit {

  @Output() actualizarValor = new EventEmitter<Skill>();

  editarHabilidad : Skill = {
    id:0,
    nombre : "",
    cantidad : 0,
    type :""
  };

  habilidadesForm = this.fb.group({
    nombre : [""],
    cantidad : [0],
    type : [""]
})
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.habilidadesForm.controls.nombre.setValue(this.editarHabilidad.nombre);
    this.habilidadesForm.controls.cantidad.setValue(this.editarHabilidad.cantidad);
    this.habilidadesForm.controls.type.setValue(this.editarHabilidad.type);
    
  }

  modifyComponent() {
    this.editarHabilidad = JSON.parse(JSON.stringify(this.habilidadesForm.value));
    this.habilidadesForm.reset();
    this.actualizarValor.emit(this.editarHabilidad);
  }

}