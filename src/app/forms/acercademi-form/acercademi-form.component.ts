import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-acercademi-form',
  templateUrl: './acercademi-form.component.html',
  styleUrls: ['./acercademi-form.component.css']
})

export class AcercademiFormComponent implements OnInit {

  @Input() textBoxValue : string = "";
  @Output() actualizarValor = new EventEmitter<string>();
  
  constructor() { }
  ngOnInit(): void {
  }

  addNewItem(value: string) {
    this.actualizarValor.emit(value);
  }
}
