import { Component } from '@angular/core';
import { ObtenerDatosService } from './servicios/obtener-datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolioAngular';


  constructor(private datos: ObtenerDatosService){
    this.datos.obtenerDatos().subscribe(data => {
      this.datos.datos.next(data);
    });
  }

  ngOnInit(): void {
  }
}