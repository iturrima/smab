import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SociosService, Socio } from '../../services/socios.service';



@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./estilos-filtro.css']
})
export class SociosComponent {


  // loadScripts() {
  //    const dynamicScripts = [
  //     '../../../assets/js/main.js',
  //     '../../../assets/js/filtro.js'
  //    ];
  //    for (let i = 0; i < dynamicScripts.length; i++) {
  //      const node = document.createElement('script');
  //      node.src = dynamicScripts[i];
  //      node.type = 'text/javascript';
  //      node.async = false;
  //      node.charset = 'utf-8';
  //      document.getElementsByTagName('head')[0].appendChild(node);
  //    }
  //  }




  // socio:any = {};

  //
  // constructor  ( private activatedRoute: ActivatedRoute,
  //                private _sociosService: SociosService
  //
  //  ){
  //
  //   this.activatedRoute.params.subscribe( params =>{
  //     console.log ( params['id'] );
  //     this.socio = this._sociosService.getSocio( params['id']);
  //     console.log ( this.socio );
  //
  //   });
  //
  // }
    socios:Socio[] = [];

    constructor ( private activatedRoute:ActivatedRoute,
                  private _sociosService:SociosService,
                  private router:Router,
                  ){

                      this.activatedRoute.params.subscribe( params =>{
                        console.log ( params['id'] );
                        // this.socio = this._sociosService.getSocio( params['id']);
                        // console.log ( this.socio );

                        // this.loadScripts();


                      });




    }
  ngOnInit() {

    this.socios = this._sociosService.getSocios();


      console.log (this.socios);
    }

    verSocio(idx:number){
      this.router.navigate( ['/socio', idx] );
    }


}
