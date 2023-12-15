import { Body, Controller, Get, Post } from "@nestjs/common";
import { PacoteService } from "./pacote.service";
import { CriaPacoteDTO } from "./dto/CriaPacote.dto";
import { PacoteEntity } from "./pacote.entity";
import { ListaPacoteDTO } from "./dto/ListaPacote.dto";
import { v4 as uuid } from 'uuid';

@Controller('/api/pacotes')
export class PacoteController {
  constructor(private pacoteService: PacoteService) {}

  @Post()
  async criaPacote(@Body() dadosDoPacote: CriaPacoteDTO) {
    const pacoteEntity = new PacoteEntity();
    pacoteEntity.nome = dadosDoPacote.nome;
    pacoteEntity.valor = dadosDoPacote.valor;
    pacoteEntity.id = uuid();

    this.pacoteService.criaPacote(pacoteEntity);

    return {
      pacote: new ListaPacoteDTO(pacoteEntity.id, pacoteEntity.nome, pacoteEntity.valor),
      messagem: 'Pacote criado com sucesso',
    };
  }

  @Get()
  async listaPacote() {
    return this.pacoteService.listaPacotes();
  }

}
