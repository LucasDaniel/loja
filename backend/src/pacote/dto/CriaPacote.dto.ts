import { IsNotEmpty, IsNumber } from 'class-validator';

export class CriaPacoteDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsNumber(undefined,{ message: 'O valor precisa ser numerico' })
  @IsNotEmpty({ message: 'O valor não pode ser vazio' })
  valor: number;
}
