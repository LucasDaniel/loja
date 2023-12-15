import { TestBed } from '@angular/core/testing';

import { UsuarioPacoteService } from './usuario-pacote.service';

describe('UsuarioPacoteService', () => {
  let service: UsuarioPacoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioPacoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
