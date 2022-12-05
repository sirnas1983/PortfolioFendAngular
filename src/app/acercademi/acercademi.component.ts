import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces';
import { AuthService } from '../servicios/auth.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {

  persona = new Persona();
  id = 1;
  validate : boolean = false;
  isHidden = false;
  editText : string = "";
  edit : boolean = false;

  constructor(private datos:ObtenerDatosService, 
              private authService:AuthService) { 
                this.datos.datos.subscribe(data=>{
                  this.persona = data; 
                })
                this.authService.currentUser.subscribe(data=>{
                  if (data && data.accessToken){
                    this.validate = true;
                  } else {
                    this.validate = false;
                  }
                })
              }

  ngOnInit(): void {
  }

  desplegar(){
    const boton : any = document.querySelector("#aboutme-card .toggle");
    boton.classList?.toggle("fa-chevron-down");
    boton.classList?.toggle("fa-chevron-up");
    this.isHidden = !this.isHidden;
  }

  }


