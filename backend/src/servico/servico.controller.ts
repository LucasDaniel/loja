import { Body, Controller, Get, Post } from "@nestjs/common";
import { ServicoService } from "./servico.service";
import { CriaServicoDTO } from "./dto/CriaServico.dto";
import { ServicoEntity } from "./servico.entity";
import { ListaServicoDTO } from "./dto/ListaServico.dto";
import { v4 as uuid } from 'uuid';

@Controller('/api/servicos')
export class ServicoController {
  constructor(private servicoService: ServicoService) {}

  @Post()
  async criaServico(@Body() dadosDoServico: CriaServicoDTO) {
    const servicoEntity = new ServicoEntity();
    servicoEntity.nome = dadosDoServico.nome;
    servicoEntity.velocidade = dadosDoServico.velocidade;
    servicoEntity.valor = dadosDoServico.valor;
    servicoEntity.id = uuid();

    this.servicoService.criaServico(servicoEntity);

    return {
      messagem: 'Serviço criado com sucesso',
    };
  }

  @Get()
  async listaServico() {
    return this.servicoService.listaServicos();
  }

}
