import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsString({ message: 'CPF informado é inválido' })
  cpf: string;

  @IsString({ message: 'RG informado é inválido' })
  rg: string;

  @IsString({ message: 'Data de nascimento informado é inválido' })
  data_nascimento: string;

  @IsString({ message: 'Telefone informado é inválido' })
  telefone: string;

  telefone_secundario: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  email: string;

  @IsString({ message: 'O cep informado é inválido' })
  cep: string;

  @IsString({ message: 'O endereco informado é inválido' })
  endereco: string;

  @IsString({ message: 'O bairro informado é inválido' })
  bairro: string;

  @IsNumber(undefined, { message: 'O numero informado é inválido' })
  numero: number;

  complemento: string;

  referencia: string;

  nome_pai: string;

  nome_mae: string;

  estado_civil: string;

  genero: string;

  nacionalidade: string;

  profissao: string;

  @IsString({ message: 'O vendedor informado é inválido' })
  vendedor: string;

  @IsNumber(undefined, { message: 'O dia do vencimento informado é inválido' })
  dia_vencimento: number;

  observacao: string;
}
