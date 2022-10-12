import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Idioma } from 'src/app/interfaces';

@Component({
  selector: 'app-idiomas-form',
  templateUrl: './idiomas-form.component.html',
  styleUrls: ['./idiomas-form.component.css']
})
export class IdiomasFormComponent implements OnInit {

  @Output() actualizarValor = new EventEmitter<Idioma>();
  @Input() editarIdioma : Idioma = {
    idioma : "",
    oral : "",
    escrito : "",
    comprension: ""
  };

  idiomasForm = this.fb.group({
    idioma : [""],
    oral : [""],
    escrito : [""],
    comprension : [""]
})
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.idiomasForm.setValue(JSON.parse(JSON.stringify(this.editarIdioma)))
  }

  modifyComponent() {
    this.editarIdioma = JSON.parse(JSON.stringify(this.idiomasForm.value));
    this.actualizarValor.emit(this.editarIdioma);
  }

}
