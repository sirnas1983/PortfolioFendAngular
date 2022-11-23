import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  form : FormGroup;

  constructor(private formBuilder:FormBuilder, private autenticacionService:LoginService, private ruta:Router) { 
    this.form = this.formBuilder.group(
      {
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8),]]
      }
  )
  }

  ngOnInit(){
      }

    onEnviar(event:Event){
      event.preventDefault;
      this.autenticacionService.login(this.form.value).subscribe(data=>{
      this.ruta.navigate(['/portfolio']);
      })
    }

    get Email(){
      return this.form.get('email');
    }

    get Password(){
      return this.form.get('password');
    }
      
}
