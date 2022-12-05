import { Component, OnInit } from '@angular/core';
import Producto from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-alzadores',
  templateUrl: './alzadores.component.html',
  styleUrls: ['./alzadores.component.css']
})
export class AlzadoresComponent implements OnInit {
  alzadores: Producto[];

  constructor(
    private productoSevice: ProductoService
  ) { 
    this.alzadores = [{
      nombreProducto: '',
      precioProducto: 50,
      categoriaProducto: 'mesa',
      descripcionProducto: '10*10',
      fotoProducto: '',
    }];
  }

  ngOnInit(): void {

    this.productoSevice.getAlzadores().subscribe(alzadores => {
      this.alzadores = alzadores;
    })
  }


}
