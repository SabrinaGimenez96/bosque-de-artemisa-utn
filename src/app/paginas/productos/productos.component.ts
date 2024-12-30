import { Component, OnInit } from '@angular/core';
import { ProductService } from './productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  ramos: any = [];
  productoSeleccionado: any = null;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductos().then(data => {
      this.ramos = data;
    });
  }

  verDetalles(ramo: any) {
    this.productoSeleccionado = ramo;
  }

  cerrarModal() {
    this.productoSeleccionado = null;
  }
}
