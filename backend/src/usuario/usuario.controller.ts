import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('/api/usuarios')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.email = dadosDoUsuario.email;
    usuarioEntity.nome = dadosDoUsuario.nome;
    usuarioEntity.cep = dadosDoUsuario.cep;
    usuarioEntity.id = uuid();

    this.usuarioService.criaUsuario(usuarioEntity);

    return {
      id: usuarioEntity.id.toString(),
    };
  }
}
