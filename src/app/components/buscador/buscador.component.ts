import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  blog:any[] = [];

  constructor( private activatedRoute:ActivatedRoute,
               private _blogService:BlogService
  ) {



  }



  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      console.log( params ['termino']);
      this.blog = this._blogService.buscarBlog( params ['termino']);
      console.log( this.blog );
    })

  }

}
