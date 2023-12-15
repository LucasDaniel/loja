import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USER_SERVICE_API } from '../link.api';
import { Observable } from 'rxjs';
import { Cobertura } from 'src/app/model/cobertura.model';

@Injectable({
  providedIn: 'root'
})
export class CoberturaService {

  private url: string = '/coberturas';

  constructor(
    private httpClient: HttpClient
  ) { }

  get(): Observable<Cobertura[]> {
    return this.httpClient.get<Cobertura[]>(`${USER_SERVICE_API}`+this.url);
  }

}
