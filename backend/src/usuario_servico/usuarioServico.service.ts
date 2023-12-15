import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioServicoEntity } from './usuarioServico.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioServicoService {
  constructor(
    @InjectRepository(UsuarioServicoEntity)
    private readonly usuarioServicoRepository: Repository<UsuarioServicoEntity>,
  ) {}

  async criaUsuarioServico(usuarioServicoEntity: UsuarioServicoEntity) {
    await this.usuarioServicoRepository.save(usuarioServicoEntity);
  }

}
