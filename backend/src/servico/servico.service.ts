import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ServicoEntity } from "./servico.entity";

@Injectable()
export class ServicoService {
    constructor(
        @InjectRepository(ServicoEntity)
        private readonly servicoRepository: Repository<ServicoEntity>,
    ) {}

    async criaServico(servicoEntity: ServicoEntity) {
        await this.servicoRepository.save(servicoEntity);
    }

    async listaServicos() {
        return await this.servicoRepository.find();
    }
}
