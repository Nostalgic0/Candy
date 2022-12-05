import { Component, OnInit } from '@angular/core';
import Producto from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-escaleras',
  templateUrl: './escaleras.component.html',
  styleUrls: ['./escaleras.component.css']
})
export class EscalerasComponent implements OnInit {

  escaleras: Producto[];

  constructor(
    private productoSevice: ProductoService
  ) { 
    this.escaleras = [{
      nombreProducto: '',
      precioProducto: 50,
      categoriaProducto: 'mesa',
      descripcionProducto: '10*10',
      fotoProducto: '',
    }];
  }

  ngOnInit(): void {

    this.productoSevice.getEscaleras().subscribe(escaleras => {
      this.escaleras = escaleras;
    })
  }
}
