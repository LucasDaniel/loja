import { Body, Controller, Post } from '@nestjs/common';
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
    usuarioEntity.cpf = dadosDoUsuario.cpf;
    usuarioEntity.rg = dadosDoUsuario.rg;
    usuarioEntity.data_nascimento = dadosDoUsuario.data_nascimento;
    usuarioEntity.telefone = dadosDoUsuario.telefone;
    usuarioEntity.telefone_secundario = dadosDoUsuario.telefone_secundario;
    usuarioEntity.email = dadosDoUsuario.email;
    usuarioEntity.cep = dadosDoUsuario.cep;
    usuarioEntity.endereco = dadosDoUsuario.endereco;
    usuarioEntity.bairro = dadosDoUsuario.bairro;
    usuarioEntity.numero = dadosDoUsuario.numero;
    usuarioEntity.complemento = dadosDoUsuario.complemento;
    usuarioEntity.referencia = dadosDoUsuario.referencia;
    usuarioEntity.nome_pai = dadosDoUsuario.nome_pai;
    usuarioEntity.nome_mae = dadosDoUsuario.nome_mae;
    usuarioEntity.estado_civil = dadosDoUsuario.estado_civil;
    usuarioEntity.genero = dadosDoUsuario.genero;
    usuarioEntity.nacionalidade = dadosDoUsuario.nacionalidade;
    usuarioEntity.profissao = dadosDoUsuario.profissao;
    usuarioEntity.vendedor = dadosDoUsuario.vendedor;
    usuarioEntity.dia_vencimento = dadosDoUsuario.dia_vencimento;
    usuarioEntity.observacao = dadosDoUsuario.observacao;
    usuarioEntity.id = uuid();

    this.usuarioService.criaUsuario(usuarioEntity);

    return {
      id: usuarioEntity.id.toString(),
    };
  }
}
