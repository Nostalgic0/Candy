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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    BarNavComponent,
    CatalogoComponent,
    ComoComprarComponent,
    QuienesSomosComponent,
    FooterComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
