import { Module } from '@nestjs/common';
import { SendEmailController } from './sendEmail.controller';
import { SendEmailService } from './sendEmail.service';

@Module({
  imports: [],
  controllers: [SendEmailController],
  providers: [SendEmailService],
})
export class SendEmailModule {}
