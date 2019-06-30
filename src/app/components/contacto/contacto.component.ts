import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SendmailService } from '../../services/sendmail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: [`
      .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
      }
      `]

})
export class ContactoComponent {

  constructor(private mailService: SendmailService,
              private router: Router) {}

  enviar(forma: NgForm) {

    if (forma.value.name && forma.value.email && forma.value.message && forma.value.subject) {
      this.mailService.sendMail(forma.value)
          .subscribe( resp => {
            console.log( resp );
          });
      this.router.navigate(['../gracias']);
    }
  }

}
