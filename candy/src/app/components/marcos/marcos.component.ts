import { Component, OnInit } from '@angular/core';
import Producto from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-marcos',
  templateUrl: './marcos.component.html',
  styleUrls: ['./marcos.component.css']
})
export class MarcosComponent implements OnInit {

  marcos: Producto[];

  constructor(
    private productoSevice: ProductoService
  ) { 
    this.marcos = [{
      nombreProducto: '',
      precioProducto: 50,
      categoriaProducto: 'mesa',
      descripcionProducto: '10*10',
      fotoProducto: '',
    }];
  }

  ngOnInit(): void {

    this.productoSevice.getMarcos().subscribe(marcos => {
      this.marcos = marcos;
    })
  }
}
