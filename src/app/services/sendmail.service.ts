import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  // private url = 'http://ec2-18-236-66-28.us-west-2.compute.amazonaws.com:8069/centrocultural/sendmail/';
  private url = 'http://localhost:8069/centrocultural/sendmail/';


  constructor( private http: HttpClient ) { }

  sendmail(data: any) {
    console.log('Lo que tiene data', data.json)
    return this.http.post(`$( this.url )`, data);
  }
}
