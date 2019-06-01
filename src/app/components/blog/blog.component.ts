import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: [

          ]
})
export class BlogComponent implements OnInit {


  constructor ( private router:Router
                ){


  }
ngOnInit() {

  }

  verBlognew(idx:number){
    this.router.navigate( ['/blognew', idx] );
  }

}
