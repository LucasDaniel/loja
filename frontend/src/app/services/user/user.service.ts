import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../model/user.model';
import { USER_SERVICE_API } from '../link.api';
import { Observable } from 'rxjs';
import { UserId } from 'src/app/model/userid.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = '/usuarios';

  constructor(
    private httpClient: HttpClient
  ) { }

  create(user: User): Observable<UserId> {
    return this.httpClient.post<UserId>(`${USER_SERVICE_API}`+this.url,user);
  }

}
