import { Component, OnInit } from '@angular/core';
import { Interes } from '../interfaces';
import { ActualizarDatosService } from '../servicios/actualizar-datos.service';
import { AuthService } from '../servicios/auth.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';


@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.css']
})
export class InteresesComponent implements OnInit {
  
  intereses : Interes[] = [];
  validate : boolean = false;
  showForm : boolean = false;
  interes : Interes = {
    id : 0,
    nombre : ""
  }

  apiLista='/ver/intereses/persona/1';
  apiBorrar='/borrar/interes/';
  apiAgregar='/agregar/interes/1';
  
  constructor(
    private datos:ObtenerDatosService, 
    private actualizar:ActualizarDatosService,
    private authService : AuthService) { 
      this.datos.datos.subscribe(data=>{
        this.intereses = data.listaIntereses;
      })
      this.authService.currentUser.subscribe(data=>{
        if (data && data.accessToken){
          this.validate = true;
        } else {
          this.validate = false;
          this.showForm = false;
        }
      })
    }

  ngOnInit(): void {
  }
  
  editItem(interes : Interes){
    console.log(interes);
  }

  deleteItem(interes : Interes){
    this.actualizar.borrarDatos(this.apiBorrar + `${interes.id}`).subscribe(
      data=>{
        this.intereses = this.intereses.filter(item => item != interes);
      }
    )
  }

  addItem(){
    this.showForm = !this.showForm;
  }

  modifyComponent(contenido : Interes){
    
    this.actualizar.actualizarDatos(this.apiAgregar, contenido).subscribe(
      data => {
        console.log(this.intereses);
        console.log(contenido);
        this.datos.actualizarLista(this.apiLista).subscribe(data=>{
          this.intereses = data;
        });
      },
      error =>  {
        alert(error.status + "-" + error.statusText + "- Error en servidor, reintentelo mas tarde!")
        return;
      }
    )
  }

}
