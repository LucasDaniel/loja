import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pacote } from 'src/app/model/pacote.model';
import { USER_SERVICE_API } from '../link.api';

@Injectable({
  providedIn: 'root'
})
export class PacoteService {

  private url: string = '/pacotes';

  constructor(
    private httpClient: HttpClient
  ) { }

  get(): Observable<Pacote[]> {
    return this.httpClient.get<Pacote[]>(`${USER_SERVICE_API}`+this.url);
  }

}
