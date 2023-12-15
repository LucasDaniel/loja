import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  email: string;

  @IsString({ message: 'O cep informado é inválido' })
  cep: string;
}
