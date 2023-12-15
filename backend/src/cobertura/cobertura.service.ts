import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, createQueryBuilder } from "typeorm";
import { CoberturaEntity } from "./cobertura.entity";

@Injectable()
export class CoberturaService {
    constructor(
        @InjectRepository(CoberturaEntity)
        private readonly coberturaRepository: Repository<CoberturaEntity>,
    ) {}

    async criaCobertura(coberturaEntity: CoberturaEntity) {
        await this.coberturaRepository.save(coberturaEntity);
    }

    async listaCoberturas() {
        return await this.coberturaRepository.createQueryBuilder('coberturas').select('cep').printSql().getRawMany();
    }
}
