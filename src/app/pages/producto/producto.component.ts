import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Item } from '../../interfaces/item.interface';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  item:Item;
  id:string;
  constructor(private route:ActivatedRoute, public _productos:ProductosService) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this._productos.getProducto(params.id).subscribe((resp:Item)=>{
          this.id = params.id;
          this.item = resp;
      });
    });
    
  }

}
