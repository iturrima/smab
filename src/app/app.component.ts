import { Component } from '@angular/core';
import { SeccionesService } from './services/secciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor( public _SeccionesService: SeccionesService ){}

}
