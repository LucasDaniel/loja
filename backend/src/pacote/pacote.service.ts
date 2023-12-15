import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PacoteEntity } from "./pacote.entity";

@Injectable()
export class PacoteService {
    constructor(
        @InjectRepository(PacoteEntity)
        private readonly pacoteRepository: Repository<PacoteEntity>,
    ) {}

    async criaPacote(pacoteEntity: PacoteEntity) {
        await this.pacoteRepository.save(pacoteEntity);
    }

    async listaPacotes() {
        return await this.pacoteRepository.find();
    }
}
