import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { SociosComponent } from './components/socios/socios.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BlognewComponent } from './components/blognew/blognew.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { SmaComponent } from './components/sma/sma.component';
import { AsociarseComponent } from './components/asociarse/asociarse.component';



const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'socios', component: SociosComponent },
  { path: 'sma', component: SmaComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'asociarse', component: AsociarseComponent },
  { path: 'blognew/:id', component: BlognewComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true, scrollPositionRestoration: 'enabled' });
