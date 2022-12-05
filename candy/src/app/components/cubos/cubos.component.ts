import { Component, OnInit } from '@angular/core';
import Producto from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-cubos',
  templateUrl: './cubos.component.html',
  styleUrls: ['./cubos.component.css']
})
export class CubosComponent implements OnInit {
  cubos: Producto[];

  constructor(
    private productoSevice: ProductoService
  ) { 
    this.cubos = [{
      nombreProducto: '',
      precioProducto: 50,
      categoriaProducto: 'mesa',
      descripcionProducto: '10*10',
      fotoProducto: '',
    }];
  }

  ngOnInit(): void {

    this.productoSevice.getCubos().subscribe(cubos => {
      this.cubos = cubos;
    })
  }


}
