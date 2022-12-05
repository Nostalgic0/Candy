import { Component, OnInit } from '@angular/core';
import Producto from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-pizarras',
  templateUrl: './pizarras.component.html',
  styleUrls: ['./pizarras.component.css']
})
export class PizarrasComponent implements OnInit {
  pizarras: Producto[];

  constructor(
    private productoSevice: ProductoService
  ) { 
    this.pizarras = [{
      nombreProducto: '',
      precioProducto: 50,
      categoriaProducto: 'mesa',
      descripcionProducto: '10*10',
      fotoProducto: '',
    }];
  }

  ngOnInit(): void {

    this.productoSevice.getPizarras().subscribe(pizarras => {
      this.pizarras = pizarras;
    })
  }
}
