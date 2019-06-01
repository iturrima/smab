import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blognew-tarjeta',
  templateUrl: './blognew-tarjeta.component.html'
})
export class BlognewTarjetaComponent implements OnInit {

@Input() blognew: any = {};
@Input() index: number;

@Output() blognewSeleccionado: EventEmitter<number>;

  constructor( private router: Router) {
  // private router: Router
  this.blognewSeleccionado= new EventEmitter();
  }
  ngOnInit() {
  }

    verBlognew(){
      console.log( this.index );
      this.router.navigate(['/blognew', this.index]);
      // this.applicationSeleccionado= new EventEmitter();
      // this.applicationSeleccionado.emit( this.index);

    }


}
