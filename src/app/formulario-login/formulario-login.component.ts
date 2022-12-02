import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { TokenStorageService } from '../servicios/token-storage.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  form : FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  show = false;

  constructor(private formBuilder:FormBuilder,  
    private ruta:Router, 
    private tokenStorage: TokenStorageService, 
    private authService : AuthService,
    ) 
    { 
        this.form = this.formBuilder.group(
          {
          username:['',[Validators.required, Validators.email]],
          password:['',[Validators.required,]]
          }
      )
    }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  login(event: Event) : void{
      event.preventDefault();
      
      this.authService.login(this.form.value).subscribe(
        data => {
          console.log(data);
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          this.ruta.navigateByUrl('/portfolio');
        },
        error => {
          this.isLoginFailed = true;
          this.clearForm();
        }
      );
  }

  get Email(){
    return this.form.get('username');
  }

  get Password(){
    return this.form.get('password');
  }

  clearForm(){
    this.form.setValue({"username":[this.Email?.value], "password":['']});
  }

  showPassword(event : Event) {
    event.preventDefault();
    this.show = !this.show;
  }
}

