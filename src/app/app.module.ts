import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaPrincipalComponent } from './tarjeta-principal/tarjeta-principal.component';
import { InteresesComponent } from './intereses/intereses.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { InfoContactoComponent } from './info-contacto/info-contacto.component';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaPrincipalComponent,
    InteresesComponent,
    HabilidadesComponent,
    EstudiosComponent,
    ConocimientosComponent,
    ExperienciaLaboralComponent,
    EncabezadoComponent,
    InfoContactoComponent,
    FormularioLoginComponent,
    AcercademiComponent,
    IdiomasComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
