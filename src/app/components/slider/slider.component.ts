import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    
    
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;


  }
  showNavigationArrows = true;
  showNavigationIndicators = true;
  ngOnInit() {
  }
  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  images = ['./assets/img/slider4.jpg','/assets/img/ahumados.jpg','./assets/img/esqui.jpg','./assets/img/kayak.jpeg','./assets/img/sma.jpg'];

}

