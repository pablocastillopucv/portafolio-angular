import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path: 'home', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search/:termino', component: SearchComponent},
  {path: 'producto/:id' , component: ProductoComponent},
  {path: '**' , pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
