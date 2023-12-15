import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioPacoteController } from './usuarioPacote.controller';
import { UsuarioPacoteService } from './usuarioPacote.service';
import { UsuarioPacoteEntity } from './usuarioPacote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioPacoteEntity])],
  controllers: [UsuarioPacoteController],
  providers: [UsuarioPacoteService],
})
export class UsuarioPacoteModule {}
