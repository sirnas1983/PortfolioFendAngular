import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ObtenerDatosService } from '../servicios/obtener-datos.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private datos: ObtenerDatosService){
  
  }
  
  ngOnInit(): void {
   
  }

}
