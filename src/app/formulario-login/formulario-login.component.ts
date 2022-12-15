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
  loading : boolean;


  constructor(
    private formBuilder:FormBuilder,  
    private ruta:Router, 
    private tokenStorage: TokenStorageService, 
    private authService : AuthService,
    ) 
    {
      this.loading=false; 
      this.form = this.formBuilder.group(
        {
        username:['',[Validators.required, Validators.email]],
        password:['',[Validators.required,]]
        }
      );
      this.authService.currentUser.subscribe(data =>{
        if(data && data.accessToken){
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      })
    }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  login(event: Event) : void{
      event.preventDefault();
      this.loading = true;
      this.authService.login(this.form.value).subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data.username);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          this.loading = false;
          this.ruta.navigate(["/portfolio"]);
        },
        error => {
          this.isLoginFailed = true;
          this.loading = false;
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
    this.form.setValue({"username":this.Email?.value.toString(), "password":['']});
  }

  showPassword(event : Event) {
    event.preventDefault();
    this.show = !this.show;
  }

  cancel(){
    this.ruta.navigate(["/portfolio"]);
  }
}

