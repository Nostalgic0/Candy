import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarNavComponent } from './components/bar-nav/bar-nav.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ComoComprarComponent } from './components/como-comprar/como-comprar.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoMasComponent } from './components/producto-mas/producto-mas.component';
import { AlzadoresComponent } from './components/alzadores/alzadores.component';
import { BandejasComponent } from './components/bandejas/bandejas.component';
import { CarrosComponent } from './components/carros/carros.component';
import { ConjuntosComponent } from './components/conjuntos/conjuntos.component';
import { CubosComponent } from './components/cubos/cubos.component';
import { DecoracionesComponent } from './components/decoraciones/decoraciones.component';
import { EscalerasComponent } from './components/escaleras/escaleras.component';
import { LetrasComponent } from './components/letras/letras.component';
import { MarcosComponent } from './components/marcos/marcos.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { PizarrasComponent } from './components/pizarras/pizarras.component';
import { RepisasComponent } from './components/repisas/repisas.component';
import { TodosProductosComponent } from './components/todos-productos/todos-productos.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    BarNavComponent,
    CatalogoComponent,
    ComoComprarComponent,
    QuienesSomosComponent,
    FooterComponent,
    InicioComponent,
    ProductoComponent,
    ProductoMasComponent,
    AlzadoresComponent,
    BandejasComponent,
    CarrosComponent,
    ConjuntosComponent,
    CubosComponent,
    DecoracionesComponent,
    EscalerasComponent,
    LetrasComponent,
    MarcosComponent,
    MesasComponent,
    PizarrasComponent,
    RepisasComponent,
    TodosProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
