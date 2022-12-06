import { Component, OnInit } from '@angular/core';
import Producto from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-productomas',
  templateUrl: './productomas.component.html',
  styleUrls: ['./productomas.component.css']
})
export class ProductomasComponent implements OnInit {

  productosmas: Producto[];

  constructor(
    private productoSevice: ProductoService
  ) { 
    this.productosmas = [{
      nombreProducto: '',
      precioProducto: 50,
      categoriaProducto: 'mesa',
      descripcionProducto: '10*10',
      fotoProducto: '',
    }];
  }

  ngOnInit(): void {

    this.productoSevice.getProductosmas().subscribe(productosmas => {
      this.productosmas = productosmas;
    })
  }
}
