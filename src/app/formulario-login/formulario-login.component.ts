import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private formBuilder:FormBuilder,  
    private ruta:Router, 
    private tokenStorage: TokenStorageService, 
    private authService : AuthService,
    private matSnkBar : MatSnackBar
    ) 
    { 
        this.form = this.formBuilder.group(
          {
          username:['',[Validators.required, Validators.email]],
          password:['',[Validators.required, Validators.minLength(8),]]
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
          this.openSnackBar();
          this.isLoginFailed = true;
        }
      );
  }

  get Email(){
    return this.form.get('username');
  }

  get Password(){
    return this.form.get('password');
  }

  openSnackBar():void{
    let myMatSnackBar = this.matSnkBar.open('Datos incorrectos, intente nuevamente');
   }
}

