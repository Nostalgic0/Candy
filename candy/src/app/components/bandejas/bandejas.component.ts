import { Component, OnInit } from '@angular/core';
import Producto from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-bandejas',
  templateUrl: './bandejas.component.html',
  styleUrls: ['./bandejas.component.css']
})
export class BandejasComponent implements OnInit {

  bandejas: Producto[];

  constructor(
    private productoSevice: ProductoService
  ) { 
    this.bandejas = [{
      nombreProducto: '',
      precioProducto: 50,
      categoriaProducto: 'mesa',
      descripcionProducto: '10*10',
      fotoProducto: '',
    }];
  }

  ngOnInit(): void {

    this.productoSevice.getBandejas().subscribe(bandejas => {
      this.bandejas = bandejas;
    })
  }

}
