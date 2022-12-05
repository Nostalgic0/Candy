import { Component, OnInit } from '@angular/core';
import Producto from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-decoraciones',
  templateUrl: './decoraciones.component.html',
  styleUrls: ['./decoraciones.component.css']
})
export class DecoracionesComponent implements OnInit {

  decoraciones: Producto[];

  constructor(
    private productoSevice: ProductoService
  ) { 
    this.decoraciones = [{
      nombreProducto: '',
      precioProducto: 50,
      categoriaProducto: 'mesa',
      descripcionProducto: '10*10',
      fotoProducto: '',
    }];
  }

  ngOnInit(): void {

    this.productoSevice.getDecoraciones().subscribe(decoraciones => {
      this.decoraciones = decoraciones;
    })
  }

}
