import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioServicoController } from './usuarioServico.controller';
import { UsuarioServicoService } from './usuarioServico.service';
import { UsuarioServicoEntity } from './usuarioServico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioServicoEntity])],
  controllers: [UsuarioServicoController],
  providers: [UsuarioServicoService],
})
export class UsuarioServicoModule {}
