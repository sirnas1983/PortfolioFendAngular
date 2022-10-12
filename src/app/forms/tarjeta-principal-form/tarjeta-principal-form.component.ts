import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { General } from 'src/app/interfaces';


@Component({
  selector: 'app-tarjeta-principal-form',
  templateUrl: './tarjeta-principal-form.component.html',
  styleUrls: ['./tarjeta-principal-form.component.css'],
})

export class TarjetaPrincipalFormComponent implements OnInit {
  
  @Output() actualizarValor = new EventEmitter<General>();
  @Input() editarPrincipal : General = {
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
    this.principalForm.controls.nombre.setValue(this.editarPrincipal.nombre);
    this.principalForm.controls.ocupacion.setValue(this.editarPrincipal.ocupacion);
    this.principalForm.controls.descripcion.setValue(this.editarPrincipal.descripcion);
    this.principalForm.controls.foto.setValue(this.editarPrincipal.foto);
    this.principalForm.controls.banner.setValue(this.editarPrincipal.banner);
    this.principalForm.controls.acercademi.setValue(this.editarPrincipal.acercademi);
    this.principalForm.controls.fechaNacimiento.setValue(this.editarPrincipal.fechaNacimiento);
    this.principalForm.controls.whatsapp.setValue(this.editarPrincipal.whatsapp);
    this.principalForm.controls.email.setValue(this.editarPrincipal.email);
    this.principalForm.controls.repositorio.setValue(this.editarPrincipal.repositorio);
    this.principalForm.controls.facebook.setValue(this.editarPrincipal.facebook);
    this.principalForm.controls.instagram.setValue(this.editarPrincipal.instagram);
    this.principalForm.controls.tweeter.setValue(this.editarPrincipal.tweeter);

  }

    modifyComponent() {
      this.editarPrincipal = JSON.parse(JSON.stringify(this.principalForm.value));
      this.actualizarValor.emit(this.editarPrincipal);
    }

}
