
export class User {
    constructor(
        public nome: string,
        public email: string,
        public cep: string,
        public cpf: string,
        public rg: string,
        public data_nascimento: string,
        public telefone: string,
        public telefone_secundario: string,
        public endereco: string,
        public bairro: string,
        public numero: number,
        public complemento: string,
        public referencia: string,
        public nome_pai: string,
        public nome_mae: string,
        public estado_civil: string,
        public genero: string,
        public nacionalidade: string,
        public profissao: string,
        public vendedor: string,
        public dia_vencimento: number,
        public observacao: string
    ) {}
}
