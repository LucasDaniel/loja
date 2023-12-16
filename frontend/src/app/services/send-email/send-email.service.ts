import { Injectable } from '@angular/core';
import { USER_SERVICE_API } from '../link.api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SendEmail } from 'src/app/model/send-email.model';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  private url: string = '/sendemail';

  constructor(
    private httpClient: HttpClient
  ) { }

  sendEmail(sendEmail: SendEmail): Observable<any> {
    return this.httpClient.post<any>(`${USER_SERVICE_API}`+this.url,sendEmail);
  }
}
