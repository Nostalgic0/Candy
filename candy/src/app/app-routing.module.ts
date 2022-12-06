import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ComoComprarComponent } from './components/como-comprar/como-comprar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { AlzadoresComponent } from './components/alzadores/alzadores.component';
import { BandejasComponent } from './components/bandejas/bandejas.component';
import { CarrosComponent } from './components/carros/carros.component';
import { ConjuntosComponent } from './components/conjuntos/conjuntos.component';
import { CubosComponent } from './components/cubos/cubos.component';
import { EscalerasComponent } from './components/escaleras/escaleras.component';
import { DecoracionesComponent } from './components/decoraciones/decoraciones.component';
import { LetrasComponent } from './components/letras/letras.component';
import { MarcosComponent } from './components/marcos/marcos.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { PizarrasComponent } from './components/pizarras/pizarras.component';
import { RepisasComponent } from './components/repisas/repisas.component';
import { TodosProductosComponent } from './components/todos-productos/todos-productos.component';
import { ProductomasComponent } from './components/productomas/productomas.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'catalogo',component:CatalogoComponent},
  {path:'como-comprar',component:ComoComprarComponent},
  {path:'quienes-somos',component:QuienesSomosComponent},
  {path:'alzadores',component:AlzadoresComponent},
  {path:'bandejas',component:BandejasComponent},
  {path:'carros',component:CarrosComponent},
  {path:'conjuntos',component:ConjuntosComponent},
  {path:'cubos',component:CubosComponent},
  {path:'decoraciones',component:DecoracionesComponent},
  {path:'escaleras',component:EscalerasComponent},
  {path:'letras',component:LetrasComponent},
  {path:'marcos',component:MarcosComponent},
  {path:'mesas',component:MesasComponent},
  {path:'pizarras',component:PizarrasComponent},
  {path:'repisas',component:RepisasComponent},
  {path:'todos-productos',component:TodosProductosComponent},
  {path:'productomas',component: ProductomasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
