import { IsEmail, IsNotEmpty } from 'class-validator';

export class EnviaEmailDTO {
  @IsNotEmpty({ message: 'O email não pode ser vazio' })
  @IsEmail(undefined, { message: 'O campo email não é um email' })
  email: string;

  @IsNotEmpty({ message: 'A mensagem não pode ser vazia' })
  mensagem: string;
}
