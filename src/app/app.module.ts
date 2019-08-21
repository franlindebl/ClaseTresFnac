import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { DiscosComponent } from './discos/discos.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { DiscoComponent } from './disco/disco.component';

@NgModule({
  declarations: [
    AppComponent,
    OfertasComponent,
    DiscosComponent,
    PeliculasComponent,
    PageNotFoundComponent,
    NoticiaComponent,
    DiscoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
