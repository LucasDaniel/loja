import { Body, Controller, Get, Post } from "@nestjs/common";
import { CoberturaService } from "./cobertura.service";
import { CriaCoberturaDTO } from "./dto/CriaCobertura.dto";
import { CoberturaEntity } from "./cobertura.entity";
import { ListaCoberturaDTO } from "./dto/ListaCobertura.dto";
import { v4 as uuid } from 'uuid';

@Controller('/api/coberturas')
export class CoberturaController {
  constructor(private coberturaService: CoberturaService) {}

  @Post()
  async criaCobertura(@Body() dadosDoCobertura: CriaCoberturaDTO) {
    const coberturaEntity = new CoberturaEntity();
    coberturaEntity.cep = dadosDoCobertura.cep;
    coberturaEntity.id = uuid();

    this.coberturaService.criaCobertura(coberturaEntity);

    return {
      cobertura: new ListaCoberturaDTO(coberturaEntity.cep),
      messagem: 'Cobertura criado com sucesso',
    };
  }

  @Get()
  async listaCobertura() {
    return this.coberturaService.listaCoberturas();
  }

}
