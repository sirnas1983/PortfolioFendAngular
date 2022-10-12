import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Interes } from 'src/app/interfaces';

@Component({
  selector: 'app-intereses-form',
  templateUrl: './intereses-form.component.html',
  styleUrls: ['./intereses-form.component.css']
})
export class InteresesFormComponent implements OnInit {


  @Output() actualizarValor = new EventEmitter<Interes>();
  
  editarInteres : Interes = {
    nombre : ""
  };

  interesesForm = this.fb.group({
    nombre : [""]
})
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  modifyComponent() {
    this.editarInteres = JSON.parse(JSON.stringify(this.interesesForm.value));
    this.actualizarValor.emit(this.editarInteres);
  }

}
