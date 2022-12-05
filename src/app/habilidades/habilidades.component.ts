import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';
import { Persona, Skill } from '../interfaces';
import { ActualizarDatosService } from '../servicios/actualizar-datos.service';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  apiLista='/ver/skills/persona/1';
  apiBorrar='/borrar/skill/';
  apiAgregar='/agregar/skill/1';

  id = 0;
  isHidden = false;
  validate : boolean = false;
  showForm : boolean = false;
  skills : Skill[] = [];
  softskills : Skill[] = [];
  hardskills : Skill[] = []; 

  skill : Skill = {
    id : 0,
    nombre: "",
    cantidad: 0,
    type: ''
  }

  constructor(
    private datos:ObtenerDatosService, 
    private actualizar:ActualizarDatosService,
    private authService : AuthService
    ) { 
      this.datos.datos.subscribe((data)=>{
        this.skills = data.listaSkills;
        this.softskills = this.skills.filter((skill : Skill) => skill.type === 'soft'); 
        this.hardskills = this.skills.filter((skill : Skill) => skill.type === 'hard'); 
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
    document.querySelector("#skills-card .toggle")?.classList.toggle("fa-chevron-down");
    document.querySelector("#skills-card .toggle")?.classList.toggle("fa-chevron-up");
    this.isHidden = !this.isHidden;
  }

  addItem(){
    this.showForm = !this.showForm;
  }

    modifyComponent(contenido : Skill){
      contenido.id = this.id;
      this.actualizar.actualizarDatos(this.apiAgregar, contenido).subscribe(
        data => {
          console.log(contenido);
          this.datos.actualizarLista(this.apiLista).subscribe(data=>{
            this.skills = data;
            this.softskills = this.skills.filter((skill : Skill) => skill.type === 'soft'); 
            this.hardskills = this.skills.filter((skill : Skill) => skill.type === 'hard'); 
          });
          this.id = 0;
        },
        error =>  {
          alert(error.status + "-" + error.statusText + "- Error en servidor, reintentelo mas tarde!")
          return;
        }
      )
    }
  
    deleteItem(contenido : Skill){
      this.actualizar.borrarDatos(this.apiBorrar + `${contenido.id}`).subscribe(
        data=>{
          this.skills = this.skills.filter(item => item != contenido);
          this.softskills = this.skills.filter((skill : Skill) => skill.type === 'soft'); 
          this.hardskills = this.skills.filter((skill : Skill) => skill.type === 'hard');
        },
        error =>{
          alert(error.status + "-" + error.statusText + "- Error en servidor, reintentelo mas tarde!");
        }
      )
    }
}