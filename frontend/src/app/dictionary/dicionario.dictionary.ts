
export class Dictionary {

    public labelTitulo = {
        cep: 'CEP',
        nome: 'Nome',
        cpf: 'CPF',
        rg: 'RG',
        data_nascimento: 'Data de nascimento',
        telefone: 'Telefone',
        telefone_secundario: 'Telefone secundário',
        email: 'Email',
        endereco: 'Endereço',
        bairro: 'Bairro',
        numero: 'Numero',
        complemento: 'Complemento',
        referencia: 'Referência',
        nome_pai: 'Nome do pai',
        nome_mae: 'Nome da mãe',
        estado_civil: 'Estado civil',
        genero: 'Genêro',
        nacionalidade: 'Nacionalidade',
        profissao: 'Profissão',
        vendedor: 'Vendedor',
        dia_vencimento: 'Dia do vencimento',
        observacao: 'Observação'
    }

    public labelGeral = {
        nao_preenchido: ' não esta preenchido',
        invalido: ' é inválido',
        fechar: 'Fechar',
        queroEsse: 'Quero esse!',
        cancelar: 'Cancelar',
        valorFinal: 'Valor final',
        estado_civil: {
            solteiro: 'Solteiro',
            casado: 'Casado',
            separado: 'Separado',
            divorciado: 'Divorciado',
            viuvo: 'Viuvo',
        },
        genero: {
            masculino: 'Masculino',
            feminino: 'Feminino',
            outro: 'Outro',
        },
        nacionalidade: {
            brasileiro: 'Brasileiro',
            estrangeiro: 'Estrangeiro',
        }
    };

    public label = {
        error: {
            nao_preenchido: 'Não preenchido',
            invalido: 'Inválido',
            cep: {
                nao_preenchido: this.labelTitulo.cep+' '+this.labelGeral.nao_preenchido,
                invalido: this.labelTitulo.cep+' '+this.labelGeral.invalido
            },
            nome: {
                nao_preenchido: this.labelTitulo.nome+' '+this.labelGeral.nao_preenchido,
                invalido: this.labelTitulo.nome+' '+this.labelGeral.invalido
            },
            cpf: {
                nao_preenchido: this.labelTitulo.cpf+' '+this.labelGeral.nao_preenchido,
                invalido: this.labelTitulo.cpf+' '+this.labelGeral.invalido
            },
            rg: {
                nao_preenchido: this.labelTitulo.rg+' '+this.labelGeral.nao_preenchido,
                invalido: this.labelTitulo.rg+' '+this.labelGeral.invalido
            },
            data_nascimento: {
                nao_preenchido: this.labelTitulo.data_nascimento+' '+this.labelGeral.nao_preenchido,
                invalido: this.labelTitulo.data_nascimento+' '+this.labelGeral.invalido
            },
            telefone: {
                nao_preenchido:this.labelTitulo.telefone+' '+this.labelGeral.nao_preenchido,
                invalido: this.labelTitulo.telefone+' '+this.labelGeral.invalido
            },
            telefone_secundario: {
                nao_preenchido:this.labelTitulo.telefone_secundario+' '+this.labelGeral.nao_preenchido,
                invalido: this.labelTitulo.telefone_secundario+' '+this.labelGeral.invalido
            },
            email: {
                nao_preenchido: this.labelTitulo.email+' '+this.labelGeral.nao_preenchido,
                invalido: this.labelTitulo.email+' '+this.labelGeral.invalido
            },
            bairro: {
                nao_preenchido: this.labelTitulo.bairro+' '+this.labelGeral.nao_preenchido,
                invalido: this.labelTitulo.bairro+' '+this.labelGeral.invalido
            },
            endereco: {
                nao_preenchido: this.labelTitulo.endereco+' '+this.labelGeral.nao_preenchido,
                invalido: this.labelTitulo.endereco+' '+this.labelGeral.invalido
            },
            numero: {
                nao_preenchido: this.labelTitulo.numero+' '+this.labelGeral.nao_preenchido,
                invalido: this.labelTitulo.numero+' '+this.labelGeral.invalido
            },
            vendedor: {
                nao_preenchido: this.labelTitulo.vendedor+' '+this.labelGeral.nao_preenchido,
                invalido: this.labelTitulo.vendedor+' '+this.labelGeral.invalido
            },
            dia_vencimento: {
                nao_preenchido: this.labelTitulo.dia_vencimento+' '+this.labelGeral.nao_preenchido,
                invalido: this.labelTitulo.dia_vencimento+' '+this.labelGeral.invalido
            }
        }
    };

    public formulario = {
        etapa1: '1ª Etapa',
        etapa1Descricao: 'Verificação de CEP!',
        etapa1Botao: 'Verificar CEP',
        etapa2: '2ª Etapa',
        etapa2Descricao: 'Escolha o plano!',
        etapa2Pacotes: 'Pacotes',
        etapa2PacotesDescricao: 'Escolha os pacotes!',
        etapa2Botao: 'Fazer Cadastro',
        etapa3: '3ª Etapa',
        etapa3Descricao: 'Coloque seus dados pessoais',
        etapa3Agora: 'Agora',
        etapa3AgoraDescricao: 'O endereço para a instalação',
        etapa3Finalizar: 'Para finalizar',
        etapa3FinalizarDescricao: 'Alguns dados adicionais',
        etapa3Botao: 'Ver resumo da compra',
        etapaResumo: 'Resumo',
        etapaResumoVerificar: 'Só verificar os dados',
        etapaResumoBotao: 'Salvar'
    }

    public modal = {
        disponivel: 'Disponível',
        disponivelCEP: 'Esse CEP esta disponível para nossa super promoção!',
        naoDisponivel: 'Não disponível',
        naoDisponivelPromocao: 'não disponivel para a super promoção!',
        coloqueDados: 'Coloque seus dados',
        coloqueDadosDescricao: 'Preencha o formulario com seus dados, quanto mais dados, melhor.',
        verifique: 'Verifique os dados',
        verifiqueDescricao: 'Tudo esta preenchido corretamente. Verifique se há algum erro, se houver, clique na etapa e corrija-o.',
    }
    
}
