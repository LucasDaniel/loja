import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SendEmailService {
  constructor(private readonly mailerService: MailerService) {}

    async enviarEmail(email: string, mensagem: string) {
        await this.mailerService.sendMail({
            to: email, 
            from: 'lucasd.beltrame@gmail.com',
            subject: 'Um novo Cliente',
            html: `<h3>${mensagem}</h3>`,
        });
    }
}
