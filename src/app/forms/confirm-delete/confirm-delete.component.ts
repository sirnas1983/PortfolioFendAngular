import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-confirm-delete-form',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

    @Input() isLoading : boolean = false;
    @Output() confirmar = new EventEmitter<any>();

    constructor(){

    }

    ngOnInit(): void {
    }

    aceptar(event : Event) : void {
        this.confirmar.emit(event);
    }


}