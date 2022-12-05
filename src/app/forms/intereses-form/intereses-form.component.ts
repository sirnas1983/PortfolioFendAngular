import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Interes } from 'src/app/interfaces';
import { ActualizarDatosService } from 'src/app/servicios/actualizar-datos.service';

@Component({
  selector: 'app-intereses-form',
  templateUrl: './intereses-form.component.html',
  styleUrls: ['./intereses-form.component.css']
})
export class InteresesFormComponent implements OnInit {


  @Output() actualizarValor = new EventEmitter<Interes>();
  
  url : string = "/agregar/interes/1";
  editarInteres : Interes = {
    id:0,
    nombre : ""
  };

  interesesForm = this.fb.group({
    nombre : [""]
})
  constructor(private fb:FormBuilder, private agregarInteres : ActualizarDatosService) { }

  ngOnInit(): void {
  }

  modifyComponent() {
    this.editarInteres = JSON.parse(JSON.stringify(this.interesesForm.value));
    this.interesesForm.reset();
    this.actualizarValor.emit(this.editarInteres);
  }

}
