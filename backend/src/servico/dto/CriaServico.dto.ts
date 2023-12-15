import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CriaServicoDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsString({ message: 'A velocidade informada é inválido' })
  @IsNotEmpty({ message: 'A velocidade não pode ser vazio' })
  velocidade: string;

  @IsNumber(undefined,{ message: 'O valor precisa ser numerico' })
  @IsNotEmpty({ message: 'O valor não pode ser vazio' })
  valor: number;
}
