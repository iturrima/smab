import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socio-tarjeta',
  templateUrl: './socio-tarjeta.component.html'
})
export class SocioTarjetaComponent implements OnInit {

@Input() socio: any = {};
@Input() index: number;

@Output() socioSeleccionado: EventEmitter<number>;

  constructor( private router: Router) {
  // private router: Router
  this.socioSeleccionado= new EventEmitter();
  }
  ngOnInit() {
  }

    verSocio(){
      console.log( this.index );
      this.router.navigate(['/socio', this.index]);
      // this.applicationSeleccionado= new EventEmitter();
      // this.applicationSeleccionado.emit( this.index);

    }


}
