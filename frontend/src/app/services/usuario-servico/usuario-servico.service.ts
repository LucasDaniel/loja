import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USER_SERVICE_API } from '../link.api';
import { Observable } from 'rxjs';
import { UsuarioServico } from 'src/app/model/usuario-servico.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServicoService {

  private url: string = '/usuarioServicos';

  constructor(
    private httpClient: HttpClient
  ) { }

  create(usuarioServico:UsuarioServico): Observable<Object> {
    return this.httpClient.post(`${USER_SERVICE_API}`+this.url,usuarioServico);
  }
}
