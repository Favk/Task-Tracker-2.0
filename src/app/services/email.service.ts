import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  mailserver = "http://localhost:3000/sendmail";
  
  constructor(private http:HttpClient) { }

  send(mailBody: any) {
    return this.http.post(this.mailserver, mailBody);
  }
}
