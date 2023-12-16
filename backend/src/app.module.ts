import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuarioModule } from './usuario/usuario.module';
import { PostgresConfigService } from './config/bd.config.service';
import { ServicoModule } from './servico/servico.module';
import { PacoteModule } from './pacote/pacote.module';
import { CoberturaModule } from './cobertura/cobertura.module';
import { UsuarioPacoteModule } from './usuario_pacote/usuarioPacote.module';
import { UsuarioServicoModule } from './usuario_servico/usuarioServico.module';
import { SendEmailModule } from './send_email/sendEmail.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    UsuarioModule,
    ServicoModule,
    PacoteModule,
    CoberturaModule,
    UsuarioPacoteModule,
    UsuarioServicoModule,
    SendEmailModule,
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        auth: {
          user: 'lucasd.beltrame@gmail.com',
          pass: 'vxqewylkvgjycabe',
        },
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
  ],
})
export class AppModule {}
