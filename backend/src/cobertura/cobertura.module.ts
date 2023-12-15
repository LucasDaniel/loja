import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoberturaController } from './cobertura.controller';
import { CoberturaService } from './cobertura.service';
import { CoberturaEntity } from './cobertura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CoberturaEntity])],
  controllers: [CoberturaController],
  providers: [CoberturaService],
})
export class CoberturaModule {}
