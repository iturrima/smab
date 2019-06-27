import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SendmailService } from '../../services/sendmail.service';

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

  constructor(private mailService: SendmailService) {}

  enviar(forma: NgForm) {

    if (forma.value.name && forma.value.email && forma.value.message && forma.value.subject) {
      console.log('Enviar email');

      /* this.mailService.sendmail(forma.value)
        .subscribe( resp => {
          console.log(resp);
      }); */

      this.mailService.testGet(forma.value);
      // this.mailService.testPost();
    }
  }

}
