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
  @Input() isLoading : boolean = false;
  @Input() editarEstudio : Estudio = {
    id:0,
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
    fechaInicio : [""],
    fechaFin : [""],
    promedio : [0],
    link : [""]
})

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {

  }

  ngOnChanges():void{
    this.estudiosForm.controls.titulo.setValue(this.editarEstudio.titulo);
    this.estudiosForm.controls.institucion.setValue(this.editarEstudio.institucion);
    this.estudiosForm.controls.lugar.setValue(this.editarEstudio.lugar);
    this.estudiosForm.controls.nivel.setValue(this.editarEstudio.nivel);
    this.estudiosForm.controls.fechaInicio.setValue(this.editarEstudio.fechaInicio);
    this.estudiosForm.controls.fechaFin.setValue(this.editarEstudio.fechaFin);
    this.estudiosForm.controls.promedio.setValue(this.editarEstudio.promedio);
    this.estudiosForm.controls.link.setValue(this.editarEstudio.link);
  }

  modifyComponent() {
    this.editarEstudio = JSON.parse(JSON.stringify(this.estudiosForm.value));
    this.estudiosForm.reset();
    this.actualizarValor.emit(this.editarEstudio);
  }
}
