import { Component } from '@angular/core';
import { AuthService } from './servicios/auth.service';
import { ObtenerDatosService } from './servicios/obtener-datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolioAngular';

  loading : boolean;

  constructor(private datos: ObtenerDatosService, private authService : AuthService){
    this.loading = false;
    if (sessionStorage.getItem("auth-token") && sessionStorage.getItem("auth-user")){
      this.authService.currentUser.next(JSON.parse(`{"accessToken" : "${sessionStorage.getItem('auth-token')}"}`));
    }
  }
  
  ngOnInit(): void {
    this.loading = true;
    this.datos.obtenerDatos().subscribe(data => {
      this.datos.datos.next(data);
      this.loading = false;
    },
    error =>{
      this.loading = false;
    });
  }

}