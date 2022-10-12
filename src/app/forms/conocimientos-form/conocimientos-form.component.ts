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
    duracion : [''],
    descripcion : ['']
})

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.conocimientosForm.setValue(JSON.parse(JSON.stringify(this.editarConocimiento)))
  }

  modifyComponent() {
    this.editarConocimiento = JSON.parse(JSON.stringify(this.conocimientosForm.value));
    this.actualizarValor.emit(this.editarConocimiento);
  }


}
