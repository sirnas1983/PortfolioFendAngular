import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Conocimiento } from 'src/app/interfaces';

@Component({
  selector: 'app-conocimientos-form',
  templateUrl: './conocimientos-form.component.html',
  styleUrls: ['./conocimientos-form.component.css']
})
export class ConocimientosFormComponent implements OnInit {
  @Output() actualizarValor = new EventEmitter<Conocimiento>();
  @Input() editarConocimiento : Conocimiento = {
    id:0,
    nombre : "",
    institucion : "",
    area : "",
    nivel : "",
    duracion : 0,
    descripcion : ""
};

conocimientosForm = this.fb.group({
    nombre : [""],
    institucion : [""],
    area : [""],
    nivel : [""],
    duracion : [0],
    descripcion : [""]
})

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.conocimientosForm.controls.nombre.setValue(this.editarConocimiento.nombre);
    this.conocimientosForm.controls.institucion.setValue(this.editarConocimiento.institucion);
    this.conocimientosForm.controls.area.setValue(this.editarConocimiento.area);
    this.conocimientosForm.controls.nivel.setValue(this.editarConocimiento.nivel);
    this.conocimientosForm.controls.duracion.setValue(this.editarConocimiento.duracion);
    this.conocimientosForm.controls.descripcion.setValue(this.editarConocimiento.descripcion);
  }

  modifyComponent() {
    this.editarConocimiento = JSON.parse(JSON.stringify(this.conocimientosForm.value));
    this.actualizarValor.emit(this.editarConocimiento);
  }
}