import { Body, Controller, Get, Post } from '@nestjs/common';
import { EnviaEmailDTO } from './dto/EnviaEmail.dto';
import { SendEmailService } from './sendEmail.service';

@Controller('/api/sendemail')
export class SendEmailController {
  constructor(private sendEmailService: SendEmailService) {}

  @Post()
  enviaEmail(@Body() enviaEmailDto: EnviaEmailDTO) {
    return this.sendEmailService.enviarEmail(
      enviaEmailDto.email,
      enviaEmailDto.mensagem,
    );
  }
}
