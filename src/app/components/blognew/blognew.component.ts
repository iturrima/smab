import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';


@Component({
  selector: 'app-blognew',
  templateUrl: './blognew.component.html',

})
export class BlognewComponent {

  blognew:any = {};


  constructor  ( private activatedRoute: ActivatedRoute,
                 private _blogService: BlogService

   ){

    this.activatedRoute.params.subscribe( params =>{
      console.log ( params['id'] );
      this.blognew = this._blogService.getBlognew( params['id']);
      console.log ( this.blognew );

    });

  }

}
