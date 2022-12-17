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
  
  loading : boolean;
  intereses : Interes[] = [];
  usuarioAutenticado : boolean = false;
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
      this.loading = false; 
      this.datos.datos.subscribe(data=>{
        this.intereses = data.listaIntereses;
      })
      this.authService.currentUser.subscribe(data=>{
        if (data && data.accessToken){
          this.usuarioAutenticado = true;
        } else {
          this.usuarioAutenticado = false;
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
    this.loading = true;
    this.actualizar.borrarDatos(this.apiBorrar + `${interes.id}`).subscribe(
      data=>{
        this.intereses = this.intereses.filter(item => item != interes);
        this.loading = false;
      },
      error => {
        this.loading = false;
      }
    )
  }

  addItem(){
    this.showForm = !this.showForm;
  }

  modifyComponent(contenido : Interes){
    
    this.loading = true;
    this.showForm = false;
    this.actualizar.actualizarDatos(this.apiAgregar, contenido).subscribe(
      data => {
        this.datos.obtenerDatos().subscribe(data=>{
          
        })
        this.loading = false;
      },
      error =>  {
        this.showForm = true;
        this.loading = false;
        alert("Error en servidor, reintentelo mas tarde!");
        return;
      }
    )
  }

}
