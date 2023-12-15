import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioPacote } from 'src/app/model/usuario-pacote.model';
import { USER_SERVICE_API } from '../link.api';

@Injectable({
  providedIn: 'root'
})
export class UsuarioPacoteService {

  private url: string = '/usuarioPacotepacotes';

  constructor(
    private httpClient: HttpClient
  ) { }

  create(usuarioPacote:UsuarioPacote): Observable<Object> {
    return this.httpClient.post(`${USER_SERVICE_API}`+this.url,usuarioPacote);
  }

}
