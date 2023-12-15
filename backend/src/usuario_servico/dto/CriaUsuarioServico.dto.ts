import { IsString } from 'class-validator';

export class CriaUsuarioServicoDTO {

    @IsString({message:'Id usuario incorreto'})
    usuario_id: string;

    @IsString({message:'Id servico incorreto'})
    servico_id: string;

}
