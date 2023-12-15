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
  import { CriaUsuarioServicoDTO } from './dto/CriaUsuarioServico.dto';
  import { UsuarioServicoEntity } from './usuarioServico.entity';
  import { UsuarioServicoService } from './usuarioServico.service';
  
  @Controller('/api/usuarioServicos')
  export class UsuarioServicoController {
    constructor(private usuarioServicoService: UsuarioServicoService) {}
  
    @Post()
    async criaUsuarioServico(@Body() dadosDoUsuarioServico: CriaUsuarioServicoDTO) {
      const usuarioServicoEntity = new UsuarioServicoEntity();
      usuarioServicoEntity.usuario_id = dadosDoUsuarioServico.usuario_id;
      usuarioServicoEntity.servico_id = dadosDoUsuarioServico.servico_id;
      usuarioServicoEntity.id = uuid();
  
      const usuarioServico = this.usuarioServicoService.criaUsuarioServico(usuarioServicoEntity);
  
      return {
        messagem: 'Relação de usuario com serviço criado com sucesso',
      };
    }
  
  }
  