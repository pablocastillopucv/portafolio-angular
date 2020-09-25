import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productos.interface';
import { ThrowStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productosFiltrados: Producto[];
  productos: Producto[];
  constructor(private http:HttpClient) { 
    this.cargarProductos();
    this.productos = [];
    this.productosFiltrados = [];
  }
  
  cargarProductos(){
    return new Promise((resolve, reject) => {
        this.http.get('https://angularwebapp-18e1c.firebaseio.com/productos_idx.json').subscribe((resp:Producto[])=>{
        this.productos = resp;
        this.cargando= false;
        resolve();
      });
    })
    
  }
  getProducto(id:string){
    return this.http.get( `https://angularwebapp-18e1c.firebaseio.com/productos/${id}.json`);
  }
  buscarProducto(termino:string){
    termino = termino.toLocaleLowerCase();
    if (this.productos.length === 0) {
      this.cargarProductos().then(()=>{
        this.filtrarProductos(termino);
      })
    } else {
      this.filtrarProductos(termino);
    }
  }
  private filtrarProductos(termino:string){
    this.productosFiltrados = [];
    this.productos.forEach((producto:Producto) =>{
      const tituloLower = producto.titulo.toLowerCase();
      if (producto.categoria.indexOf(termino) >=0 || tituloLower.indexOf(termino) >=0 ) {
        this.productosFiltrados.push(producto);
      }
    });
  }
}
