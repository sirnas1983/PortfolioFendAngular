import { Component, OnInit } from '@angular/core';
import { Interes } from '../interfaces';
import { ActualizarDatosService } from '../servicios/actualizar-datos.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';
import { TokenStorageService } from '../servicios/token-storage.service';


@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.css']
})
export class InteresesComponent implements OnInit {
  
  intereses : Interes[] = [];
  validate : boolean = this.tokenService.isLogged();
  showForm : boolean = false;
  interes : Interes = {
    id : 0,
    nombre : ""
  }
  
  constructor(
    private datos:ObtenerDatosService, 
    private actualizar:ActualizarDatosService,
    private tokenService : TokenStorageService) { }


  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {this.intereses = data.intereses});
  }
  
  editItem(interes : Interes){
    console.log(interes);
  }

  deleteItem(interes : Interes){
    this.intereses = this.intereses.filter(item => item != interes);
  }

  addItem(){
    this.showForm = !this.showForm;
  }

  modifyComponent(contenido : Interes){
    
    this.actualizar.actualizarDatos('/intereses/',contenido).subscribe(
      data => {
        if(!data.ok){
        throw Error("Error en servidor, reintentelo mas tarde!");
      } else {
        console.log(data);
        this.showForm = false;
      }},
      error =>  {
        alert(error.status + "-" + error.statusText + "- Error en servidor, reintentelo mas tarde!")
        return;
      }
    )}
}
