import { IsNotEmpty, IsString } from 'class-validator';

export class CriaCoberturaDTO {

    @IsString({ message: 'O cep esta inválido' })
    @IsNotEmpty({ message: 'O cep não pode ser vazio' })
    cep: string;
    
}
