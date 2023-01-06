import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona, PersonaDTO } from 'src/app/interfaces';
import { ObtenerDatosService } from 'src/app/servicios/obtener-datos.service';


@Component({
  selector: 'app-tarjeta-principal-form',
  templateUrl: './tarjeta-principal-form.component.html',
  styleUrls: ['./tarjeta-principal-form.component.css'],
})

export class TarjetaPrincipalFormComponent implements OnInit {
  
  @Output() actualizarValor = new EventEmitter<PersonaDTO>();
  @Input() isLoading : boolean = false;
  @Input() editarPersona : Persona = new Persona();


  personaDTO : PersonaDTO = {
    id : 0,
    nombre :  "",
    ocupacion : "",
    descripcion : "",
    foto : "",
    banner : "",
    fechaNacimiento : "",
    whatsapp : "",
    email : "",
    repositorio : "",
    acercademi : "",
    facebook : "",
    instagram : "",
    tweeter : ""
  }

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

    constructor(
      private fb : FormBuilder, 
      private datos:ObtenerDatosService
     ) {
        this.datos.datos.subscribe(data=>{
          this.editarPersona = data;
          console.log(this.editarPersona.id);
        })
      }
  
    ngOnChanges():void{
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

    ngOnInit(): void {
    }

    modifyComponent() {
      this.personaDTO.acercademi = String(this.principalForm.value.acercademi).toString();
      this.personaDTO.banner = String(this.principalForm.value.banner).toString();
      this.personaDTO.descripcion = String(this.principalForm.value.descripcion).toString();
      this.personaDTO.email = String(this.principalForm.value.email).toString();
      this.personaDTO.facebook = String(this.principalForm.value.facebook).toString() || '';
      this.personaDTO.fechaNacimiento = String(this.principalForm.value.fechaNacimiento).toString();
      this.personaDTO.foto = String(this.principalForm.value.foto).toString();
      this.personaDTO.instagram = String(this.principalForm.value.instagram).toString() || '';
      this.personaDTO.nombre = String(this.principalForm.value.nombre).toString();
      this.personaDTO.ocupacion = String(this.principalForm.value.ocupacion).toString();
      this.personaDTO.repositorio = String(this.principalForm.value.repositorio).toString();
      this.personaDTO.tweeter = String(this.principalForm.value.tweeter).toString() || '';
      this.personaDTO.whatsapp = String(this.principalForm.value.whatsapp).toString();
      this.actualizarValor.emit(this.personaDTO);
    }
}