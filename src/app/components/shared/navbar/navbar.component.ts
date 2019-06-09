import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed=true;

  // toggleMenu() {
  //   this.isCollapsed = !this.isCollapsed;
  // }
  constructor( private router:Router ){}

  ngOnInit(){

  }

  buscarApplication( termino:string ){
    console.log ( termino );
    this.router.navigate(['/buscar', termino] );

  }

}
