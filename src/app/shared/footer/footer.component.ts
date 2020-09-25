import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number;
  constructor(public _servicio:InfoPaginaService) {
      this.year = new Date().getFullYear();
   }
  
  ngOnInit(): void {
  }

}
