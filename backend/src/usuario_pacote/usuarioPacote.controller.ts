import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { v4 as uuid } from 'uuid';
  import { CriaUsuarioPacoteDTO } from './dto/CriaUsuarioPacote.dto';
  import { UsuarioPacoteEntity } from './usuarioPacote.entity';
  import { UsuarioPacoteService } from './usuarioPacote.service';
  
  @Controller('/api/usuarioPacotepacotes')
  export class UsuarioPacoteController {
    constructor(private usuarioPacoteService: UsuarioPacoteService) {}
  
    @Post()
    async criaUsuarioPacote(@Body() dadosDoUsuarioPacote: CriaUsuarioPacoteDTO) {
      const usuarioPacoteEntity = new UsuarioPacoteEntity();
      usuarioPacoteEntity.usuario_id = dadosDoUsuarioPacote.usuario_id;
      usuarioPacoteEntity.pacote_id = dadosDoUsuarioPacote.pacote_id;
      usuarioPacoteEntity.id = uuid();
  
      const usuarioPacote = this.usuarioPacoteService.criaUsuarioPacote(usuarioPacoteEntity);
  
      return {
        messagem: 'Relação de usuario com pacote criado com sucesso',
      };
    }
  
  }
  