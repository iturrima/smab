import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Headers } from "@angular/http";
import { Seccion} from '../components/interfaces/seccion.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeccionesService {

  seccionesURL: string = "https://smabureau-ddc3c.firebaseio.com/seccion.json"

  info: Seccion = {};
  cargada = false;

  secciones: any[] = [];

  constructor( private http: HttpClient ) {

    console.log( "Servicio de Secciones listo")

    this.cargarInfo();
    this.cargarSecciones();

  }


  nuevaSeccion ( seccion:Seccion ){

    let body = JSON.stringify ( seccion );
    let headers = new HttpHeaders ({
      'Content-Type':'application/json'
    });

    return this.http.post ( this.seccionesURL, body , { headers} ).pipe(
      map( ( res:any ) => {
        console.log( res.json());
        return res.json();
      }));

  }

private cargarInfo (){

  this.http.get('assets/data/data.json')
  .subscribe( (resp: Seccion) => {

    this.cargada = true;
    this.info = resp;
    console.log(resp);
  });
}

private cargarSecciones (){

  this.http.get('https://smabureau-ddc3c.firebaseio.com/seccion.json')
  .subscribe( (resp: any[]) => {

    // this.secciones = true;
    this.secciones = resp;
    console.log('desde firebase');
    console.log(resp);
  });

}

}
