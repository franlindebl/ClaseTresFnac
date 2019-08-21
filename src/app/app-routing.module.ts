import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfertasComponent } from './ofertas/ofertas.component';
import { DiscosComponent } from './discos/discos.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: OfertasComponent  },
  { path: 'discos', component: DiscosComponent  },
  { path: 'peliculas', component: PeliculasComponent  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
