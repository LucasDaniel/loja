import { TestBed } from '@angular/core/testing';

import { UsuarioServicoService } from './usuario-servico.service';

describe('UsuarioServicoService', () => {
  let service: UsuarioServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
