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
    nombre : "",
    cantidad : 0,
    type :""
  };

  habilidadesForm = this.fb.group({
    nombre : [""],
    cantidad : [""],
    type : [""]
})
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.habilidadesForm.setValue(JSON.parse(JSON.stringify(this.editarHabilidad)))
  }

  modifyComponent() {
    this.editarHabilidad = JSON.parse(JSON.stringify(this.habilidadesForm.value));
    console.log(JSON.parse(JSON.stringify(this.habilidadesForm.value)));
    this.actualizarValor.emit(this.editarHabilidad);
  }

}