import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  loading : boolean;

  constructor(private datos: ObtenerDatosService, private authService : AuthService){
    this.loading = true;
    if (sessionStorage.getItem("auth-token") && sessionStorage.getItem("auth-user")){
      this.authService.currentUser.next(JSON.parse(`{"accessToken" : "${sessionStorage.getItem('auth-token')}"}`));
    }
  }
  
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.datos.datos.next(data);
      this.loading = false;
    },
    error =>{
      this.loading = false;
    });
  }
}
