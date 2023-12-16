import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

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

  @IsOptional()
  telefone_secundario: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  email: string;

  @IsString({ message: 'O cep informado é inválido' })
  cep: string;

  @IsString({ message: 'O endereco informado é inválido' })
  endereco: string;

  @IsString({ message: 'O bairro informado é inválido' })
  bairro: string;

  @IsInt({ message: 'O numero informado é inválido' })
  numero: number;

  @IsOptional()
  complemento: string;

  @IsOptional()
  referencia: string;

  @IsOptional()
  nome_pai: string;

  @IsOptional()
  nome_mae: string;

  @IsOptional()
  estado_civil: string;

  @IsOptional()
  genero: string;

  @IsOptional()
  nacionalidade: string;

  @IsOptional()
  profissao: string;

  @IsString({ message: 'O vendedor informado é inválido' })
  vendedor: string;

  @IsInt({ message: 'O dia do vencimento informado é inválido' })
  dia_vencimento: number;

  @IsOptional()
  observacao: string;
}
