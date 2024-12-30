import { Injectable } from '@angular/core';
import { productos } from '../../ramos'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProductos() {
    return Promise.resolve(productos); // Retorna los datos como una Promesa
  }
}
