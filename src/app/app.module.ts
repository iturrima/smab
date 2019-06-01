import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



//Routes
import { APP_ROUTING } from './app.routes';

//Servicios
import {BlogService } from './services/blog.service';
import {SociosService } from './services/socios.service';
import {SeccionesService } from './services/secciones.service';

// @NgModule({
//   imports: [],
//   declarations: [SocioTarjetaComponent,BlognewTarjetaComponent, BuscadorComponent, TemplateComponent, SeccionComponent, HomeComponent],
//   providers: []
// })
export class modulename { }



//componentes
import { AppComponent } from './app.component';
import { AsociarseComponent } from './components/asociarse/asociarse.component';
import { SmaComponent } from './components/sma/sma.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SociosComponent } from './components/socios/socios.component';
import { SocioTarjetaComponent } from './components/socio-tarjeta/socio-tarjeta.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlognewComponent } from './components/blognew/blognew.component';
import { BlognewTarjetaComponent } from './components/blognew-tarjeta/blognew-tarjeta.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CarouselComponent } from './components/carousel/carousel.component';
// import { Seccion } from './components/interfaces/seccion.interface';


@NgModule({
  declarations: [
    AppComponent,
    AsociarseComponent,
    SmaComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SociosComponent,
    SocioTarjetaComponent,
    ContactComponent,
    BlogComponent,
    BlognewComponent,
    BlognewTarjetaComponent,
    BuscadorComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // ReactiveFormsModule,
    APP_ROUTING,
    NgbModule.forRoot()

  ],
  providers: [
    BlogService,
    SociosService,
    SeccionesService

  ],

  bootstrap: [AppComponent]
})




export class AppModule { }
