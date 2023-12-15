import { IsString, IsUUID } from 'class-validator';

export class CriaUsuarioPacoteDTO {

    @IsString({message:'Id usuario incorreto'})
    usuario_id: string;

    @IsString({message:'Id pacote incorreto'})
    pacote_id: string;

}
