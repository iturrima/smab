import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


//Routes
import { APP_ROUTING } from './app.routes';

//Servicios
import {BlogService } from './services/blog.service';
import {SociosService } from './services/socios.service';
import {SeccionesService } from './services/secciones.service';


export class modulename { }



//componentes
import { AppComponent } from './app.component';
import { AsociarseComponent } from './components/asociarse/asociarse.component';
import { SmaComponent } from './components/sma/sma.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SociosComponent } from './components/socios/socios.component';
import { SocioTarjetaComponent } from './components/socio-tarjeta/socio-tarjeta.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlognewComponent } from './components/blognew/blognew.component';
import { BlognewTarjetaComponent } from './components/blognew-tarjeta/blognew-tarjeta.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SliderComponent } from './components/slider/slider.component';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ModalComponent } from './components/modal/modal.component';
import { BotonComponent } from './components/boton/boton.component';
import { BgvideoComponent } from './components/bgvideo/bgvideo.component';
import { TranslationComponent } from './translation/translation.component';
// import { Seccion } from './components/interfaces/seccion.interface';


@NgModule({
  declarations: [
    AppComponent,
    AsociarseComponent,
    SmaComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    NosotrosComponent,
    SociosComponent,
    SocioTarjetaComponent,
    ContactoComponent,
    BlogComponent,
    BlognewComponent,
    BlognewTarjetaComponent,
    BuscadorComponent,
    CarouselComponent,
    SliderComponent,
    CaracteristicasComponent,
    DropdownComponent,
    ModalComponent,
    BotonComponent,
    BgvideoComponent,
    TranslationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // ReactiveFormsModule,
    APP_ROUTING,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, './assets/i18n/', '.json');

        },
        deps: [ HttpClient ]
      }
    })


  ],
  providers: [
    BlogService,
    SociosService,
    SeccionesService

  ],

  bootstrap: [AppComponent]
})




export class AppModule { }
