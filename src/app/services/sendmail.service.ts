import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  private url = 'http://ec2-18-236-66-28.us-west-2.compute.amazonaws.com:8069/centrocultural/sendmail/';

  prueba: Object = {
    nombre: 'Carlos Alberto',
    correo: 'aaaaaa@gmail.com'
  };

  constructor( private http: HttpClient ) { }

  sendMail(forma: any) {
    console.log(forma);

    const params = new HttpParams()
        .set('nombre_contacto', forma.name)
        .set('correo_contacto', forma.email)
        .set('message', forma.message)
        .set('subject', forma.subject);

    return this.http.get(this.url, {params});
  }

  testPost() {
    console.log('Entro a testPost:', this.url);

    this.http.post(this.url, this.prueba)
      .subscribe(respon => {
          console.log(respon);
      });
  }

}
