import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servico } from 'src/app/model/servico.model';
import { USER_SERVICE_API } from '../link.api';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private url: string = '/servicos';

  constructor(
    private httpClient: HttpClient
  ) { }

  get(): Observable<Servico[]> {
    return this.httpClient.get<Servico[]>(`${USER_SERVICE_API}`+this.url);
  }

}
