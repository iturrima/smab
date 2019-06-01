import { Component } from '@angular/core';
import { SeccionesService } from '../../services/secciones.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {

  // loadScripts() {
  //    const dynamicScripts = [
  //     '../../../assets/js/owl.carousel.min.js',
  //     '../../../assets/js/main.js'
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
  constructor  ( public infoService: SeccionesService
 ){

   // this.loadScripts();


  }

}
