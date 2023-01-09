import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';
import { Conocimiento, Skill } from '../interfaces';
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

  loading : boolean;
  id = 0;
  isHidden = false;
  usuarioAutenticado : boolean = false;
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
      this.loading = false;
      this.datos.datos.subscribe((data)=>{
        this.skills = data.listaSkills;
        this.softskills = this.skills.filter((skill : Skill) => skill.type === 'soft'); 
        this.hardskills = this.skills.filter((skill : Skill) => skill.type === 'hard'); 
      });
      this.authService.currentUser.subscribe(data=>{
        if (data && data.accessToken){
          this.usuarioAutenticado = true;
        } else {
          this.usuarioAutenticado = false;
        }
      });
    }

  ngOnInit(): void {
  }

  desplegar(){
    document.querySelector("#skills-card .toggle")?.classList.toggle("fa-chevron-down");
    document.querySelector("#skills-card .toggle")?.classList.toggle("fa-chevron-up");
    this.isHidden = !this.isHidden;
  }

  reset(){
    this.skill = {
      id : 0,
      nombre: "",
      cantidad: 0,
      type: ''
    }
  }

  addItem(){
    this.reset();
  }

    modifyComponent(contenido : Skill){
      this.loading = true;
      this.actualizar.actualizarDatos(this.apiAgregar, contenido).subscribe(
        data => {
          this.datos.obtenerDatos().subscribe(data=>{
          document.getElementById("habilidadesModalCloseButton")?.click();
          })
          this.loading = false;
          this.id = 0;
        },
        error =>  {
          this.loading = false;
          alert("Error en servidor, reintentelo mas tarde!")
          return;
        }
      )
    }
    selectItem(conocimiento : Skill){
      this.skill = conocimiento;
    }
  
    deleteItem(event : Event){
      this.loading = true;
      this.actualizar.borrarDatos(this.apiBorrar + `${this.skill.id}`).subscribe(
        data=>{
          this.skills = this.skills.filter(item => item != this.skill);
          this.softskills = this.skills.filter((skill : Skill) => skill.type === 'soft'); 
          this.hardskills = this.skills.filter((skill : Skill) => skill.type === 'hard');
          document.getElementById("deleteModalCloseButton")?.click();
          this.loading = false;
        },
        error =>{
          this.loading = false;
          alert("Error en servidor, reintentelo mas tarde!");
        }
      )
    }
}