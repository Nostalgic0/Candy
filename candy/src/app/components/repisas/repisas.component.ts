import { Component, OnInit } from '@angular/core';
import Producto from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-repisas',
  templateUrl: './repisas.component.html',
  styleUrls: ['./repisas.component.css']
})
export class RepisasComponent implements OnInit {

  repisas: Producto[];

  constructor(
    private productoSevice: ProductoService
  ) { 
    this.repisas = [{
      nombreProducto: '',
      precioProducto: 50,
      categoriaProducto: 'mesa',
      descripcionProducto: '10*10',
      fotoProducto: '',
    }];
  }

  ngOnInit(): void {

    this.productoSevice.getRepisas().subscribe(repisas => {
      this.repisas = repisas;
    })
  }
}
