import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacoteController } from './pacote.controller';
import { PacoteService } from './pacote.service';
import { PacoteEntity } from './pacote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PacoteEntity])],
  controllers: [PacoteController],
  providers: [PacoteService],
})
export class PacoteModule {}
