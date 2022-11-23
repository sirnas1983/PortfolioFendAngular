import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
{path:'portfolio', component : PortfolioComponent},
{path:'login',component : FormularioLoginComponent, canActivate:[GuardGuard]},
{path:'',redirectTo:'portfolio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
