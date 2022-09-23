import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ComoComprarComponent } from './components/como-comprar/como-comprar.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';

const routes: Routes = [
  {path:'catalogo',component:CatalogoComponent},
  {path:'como-comprar',component:ComoComprarComponent},
  {path:'quienes-somos',component:QuienesSomosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
