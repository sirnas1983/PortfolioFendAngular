import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Persona } from 'src/app/interfaces';
import { ActualizarDatosService } from 'src/app/servicios/actualizar-datos.service';


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

url : string = "/agregar/persona/1";
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

    constructor(private fb : FormBuilder, private modificarPersona : ActualizarDatosService) { 
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
      this.editarPersona.acercademi = String(this.principalForm.value.acercademi).toString();
      this.editarPersona.banner = String(this.principalForm.value.banner).toString();
      this.editarPersona.descripcion = String(this.principalForm.value.descripcion).toString();
      this.editarPersona.email = String(this.principalForm.value.email).toString();
      this.editarPersona.facebook = String(this.principalForm.value.facebook).toString();
      this.editarPersona.fechaNacimiento = String(this.principalForm.value.fechaNacimiento).toString();
      this.editarPersona.foto = String(this.principalForm.value.foto).toString();
      this.editarPersona.instagram = String(this.principalForm.value.instagram).toString();
      this.editarPersona.nombre = String(this.principalForm.value.nombre).toString();
      this.editarPersona.ocupacion = String(this.principalForm.value.ocupacion).toString();
      this.editarPersona.repositorio = String(this.principalForm.value.repositorio).toString();
      this.editarPersona.tweeter = String(this.principalForm.value.tweeter).toString();
      this.editarPersona.whatsapp = String(this.principalForm.value.whatsapp).toString();
      this.actualizarValor.emit(this.editarPersona);
    }
}