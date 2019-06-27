import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  // private url = 'http://ec2-18-236-66-28.us-west-2.compute.amazonaws.com:8069/centrocultural/testmail/';
  private url = 'http://localhost:8070/centrocultural/sendmail/';
  // *private url = 'http://localhost:8070/centrocultural/testmail/';
  // private url = 'http://jsonplaceholder.typicode.com/posts';

  prueba: Object = {
    nombre: 'Carlos Albrtp',
    correo: 'foxcarlos@gmail.com'
  };

  constructor( private http: HttpClient ) { }

  sendmail(data: any) {
    console.log('Lo que tiene data', data);
    return this.http.post(this.url, data);
  }

  testGet(forma: any) {
    console.log(forma);

    const params = new HttpParams()
        .set('nombre_contacto', forma.name)
        .set('to', forma.email)
        .set('message', forma.message)
        .set('subject', forma.subject);

    // this.http.get('http://localhost:8070/centrocultural/test', {params})
    this.http.get(this.url, {params})
        .subscribe(data => {
          console.log(data);
      });
  }

  testPost() {
    console.log('Entro a testPost:', this.url);

    this.http.post(this.url, this.prueba)
      .subscribe(respon => {
          console.log(respon);
      });
  }

}
