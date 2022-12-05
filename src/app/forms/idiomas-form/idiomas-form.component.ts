import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Idioma } from 'src/app/interfaces';
import { ActualizarDatosService } from 'src/app/servicios/actualizar-datos.service';

@Component({
  selector: 'app-idiomas-form',
  templateUrl: './idiomas-form.component.html',
  styleUrls: ['./idiomas-form.component.css']
})
export class IdiomasFormComponent implements OnInit {

  @Output() actualizarValor = new EventEmitter<any>();
  @Input() editarIdioma : Idioma = {
    id:0,
    idioma : "",
    oral : "",
    escrito : "",
    comprension: ""
  };

  url : string = "/agregar/idioma/1";
  idiomasForm = this.fb.group({
    idioma : [""],
    oral : [""],
    escrito : [""],
    comprension : [""]
})
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.idiomasForm.controls.idioma.setValue(this.editarIdioma.idioma);
    this.idiomasForm.controls.oral.setValue(this.editarIdioma.oral);
    this.idiomasForm.controls.escrito.setValue(this.editarIdioma.escrito);
    this.idiomasForm.controls.comprension.setValue(this.editarIdioma.comprension);

  }

  modifyComponent() {
    let idioma = JSON.parse(JSON.stringify(this.idiomasForm.value));
    this.actualizarValor.emit(idioma);
    this.idiomasForm.reset();
  }

}
