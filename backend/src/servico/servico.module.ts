import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicoController } from './servico.controller';
import { ServicoService } from './servico.service';
import { ServicoEntity } from './servico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServicoEntity])],
  controllers: [ServicoController],
  providers: [ServicoService],
})
export class ServicoModule {}
