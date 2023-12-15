import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioPacoteEntity } from './usuarioPacote.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioPacoteService {
  constructor(
    @InjectRepository(UsuarioPacoteEntity)
    private readonly usuarioPacoteRepository: Repository<UsuarioPacoteEntity>,
  ) {}

  async criaUsuarioPacote(usuarioPacoteEntity: UsuarioPacoteEntity) {
    await this.usuarioPacoteRepository.save(usuarioPacoteEntity);
  }

}
