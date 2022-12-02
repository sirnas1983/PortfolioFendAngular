import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Persona } from 'src/app/interfaces';


@Component({
  selector: 'app-tarjeta-principal-form',
  templateUrl: './tarjeta-principal-form.component.html',
  styleUrls: ['./tarjeta-principal-form.component.css'],
})

export class TarjetaPrincipalFormComponent implements OnInit {
  
  @Output() actualizarValor = new EventEmitter<Persona>();
  @Input() editarPersona : Persona = {
    id:0,
    nombre : "",
    ocupacion : "",
    descripcion : "",
    foto : "",
    banner : "",
    fechaNacimiento :"",
    whatsapp : "",
    email : "",
    repositorio : "",
    acercademi : "",
    facebook : "",
    instagram : "",
    tweeter : "",
    interes : [],
    skills : [],
    experiencias : [],
    estudios : [],
    idiomas : [],
    conocimientos: [],
};

principalForm = this.fb.group({
  nombre : [''],
  ocupacion : [''], 
  descripcion : [''],
  foto : [''],
  banner : [''],
  acercademi : [''],
  fechaNacimiento :[''],
  whatsapp : [''],
  email : [''],
  repositorio : [''],
  facebook : [''],
  instagram : [''],
  tweeter : ['']
});

    constructor(private fb : FormBuilder) { 
    }
  
    ngOnInit(): void {
    this.principalForm.controls.nombre.setValue(this.editarPersona.nombre);
    this.principalForm.controls.ocupacion.setValue(this.editarPersona.ocupacion);
    this.principalForm.controls.descripcion.setValue(this.editarPersona.descripcion);
    this.principalForm.controls.foto.setValue(this.editarPersona.foto);
    this.principalForm.controls.banner.setValue(this.editarPersona.banner);
    this.principalForm.controls.acercademi.setValue(this.editarPersona.acercademi);
    this.principalForm.controls.fechaNacimiento.setValue(this.editarPersona.fechaNacimiento);
    this.principalForm.controls.whatsapp.setValue(this.editarPersona.whatsapp);
    this.principalForm.controls.email.setValue(this.editarPersona.email);
    this.principalForm.controls.repositorio.setValue(this.editarPersona.repositorio);
    this.principalForm.controls.facebook.setValue(this.editarPersona.facebook);
    this.principalForm.controls.instagram.setValue(this.editarPersona.instagram);
    this.principalForm.controls.tweeter.setValue(this.editarPersona.tweeter);

  }

    modifyComponent() {
      this.editarPersona = JSON.parse(JSON.stringify(this.principalForm.value));
      this.actualizarValor.emit(this.editarPersona);
    }

}
