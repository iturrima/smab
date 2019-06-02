import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [NgbDropdownConfig] // add NgbDropdownConfig to the component providers
})
export class DropdownComponent implements OnInit {

  constructor(config: NgbDropdownConfig) {
    // customize default values of dropdowns used by this component tree
    config.placement = 'down-right';
    config.autoClose = true;
  }

  ngOnInit() {
  }

}
