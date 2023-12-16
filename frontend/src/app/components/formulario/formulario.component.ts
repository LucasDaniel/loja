import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pacote } from 'src/app/model/pacote.model';
import { Servico } from 'src/app/model/servico.model';
import { User } from 'src/app/model/user.model';
import { UsuarioPacote } from 'src/app/model/usuario-pacote.model';
import { UsuarioServico } from 'src/app/model/usuario-servico.model';
import { CoberturaService } from 'src/app/services/cobertura/cobertura.service';
import { PacoteService } from 'src/app/services/pacote/pacote.service';
import { ServicoService } from 'src/app/services/servico/servico.service';
import { UserService } from 'src/app/services/user/user.service';
import { UsuarioPacoteService } from 'src/app/services/usuario-pacote/usuario-pacote.service';
import { UsuarioServicoService } from 'src/app/services/usuario-servico/usuario-servico.service';
import { ModalMessageComponent } from '../modal-message/modal-message.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit {

  public cep = '32010770';
  public planoEscolhido:Servico | undefined;
  public pacoteEscolhido:Pacote | undefined;
  public step = 1;
  public stepModal = 1;
  public planosDisponiveis:Servico[] = [];
  public pacotesDisponiveis:Pacote[] = [];
  public formUsuario: FormGroup = this.fb.group({
    nome: ['Lucas', {
      Validators:[
        Validators.required,
        Validators.minLength(3)
      ], 
    }],
    cpf: ['08292649654', {
      Validators:[
        Validators.required,
        Validators.minLength(11)
      ], 
    }],
    rg: ['15312075', {
      Validators:[
        Validators.required,
        Validators.minLength(8)
      ], 
    }],
    data_nascimento: ['16061989', {
      Validators:[
        Validators.required,
        Validators.minLength(8)
      ], 
    }],
    telefone: ['31993675492', {
      Validators:[
        Validators.required,
        Validators.minLength(11)
      ], 
    }],
    telefone_secundario: [''],
    email: ['lucas@email.com', {
      Validators:[
        Validators.required,
        Validators.email
      ], 
    }],
    endereco: ['Rua B', {
      Validators:[
        Validators.required,
        Validators.minLength(5)
      ], 
    }],
    bairro: ['Campo Alto', {
      Validators:[
        Validators.required,
        Validators.minLength(2)
      ], 
    }],
    numero: ['228', {
      Validators:[
        Validators.required,
        Validators.minLength(1)
      ], 
    }],
    complemento: [''],
    referencia: [''],
    nome_pai: [''],
    nome_mae: [''],
    estado_civil: [''],
    genero: [''],
    nacionalidade: [''],
    profissao: [''],
    vendedor: ['Rafael', {
      Validators:[
        Validators.required,
        Validators.minLength(3)
      ], 
    }],
    dia_vencimento: ['05', {
      Validators:[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(2)
      ], 
    }],
    observacao:  ['Teste obs'],
  });

  private user!: User;
  private cepsDisponiveis:string[] = [];

  constructor(
    private serviceCobertura: CoberturaService,
    private servicePacote: PacoteService,
    private serviceServico: ServicoService,
    private serviceUser: UserService,
    private serviceUsuarioServico: UsuarioServicoService,
    private serviceUsuarioPacote: UsuarioPacoteService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
  }
  ngOnInit(): void {
    this.serviceCobertura.get()
      .subscribe(
        resposta => {
          resposta.forEach(element => {
            this.cepsDisponiveis.push(element.cep);
          });
        }
      );
    this.servicePacote.get()
      .subscribe(
        resposta => {
          this.pacotesDisponiveis = resposta;
        }
      );
    this.serviceServico.get()
      .subscribe(
        resposta => {
          this.planosDisponiveis = resposta;
        }
      );
  }

  verificaCEP() {
    if(this.cepsDisponiveis.indexOf(this.formatCEP()) !== -1) {
      if(this.stepModal == 1) this.openModalMessage("Disponível","Esse CEP esta disponível para nossa super promoção!","success");
      this.proximoPasso();
    } else {
      if(this.stepModal == 1) this.openModalMessage("Não disponível","CEP "+this.formatCEP()+" não disponivel para a super promoção!","error");
    }
  }

  formatCEP() {
    return this.cep.substring(0,5)+"-"+this.cep.substring(5);
  }

  queroEssePlano(servico:Servico) {
    this.planoEscolhido = servico;
  }

  cancelaEscolhaPlano() {
    this.planoEscolhido = undefined;
  }

  queroEssePacote(pacote:Pacote) {
    this.pacoteEscolhido = pacote;
  }

  cancelaEscolhaPacote() {
    this.pacoteEscolhido = undefined;
  }

  escolheuPlanosPacotes() {

    this.proximoPasso();
  }

  resumoDaCompra() {
    this.proximoPasso();
  }

  salvar() {
    this.user = new User(
      this.formUsuario.controls['nome'].value,this.formUsuario.controls['email'].value,
      this.cep,this.formUsuario.controls['cpf'].value,
      this.formUsuario.controls['rg'].value, this.formUsuario.controls['data_nascimento'].value,
      this.formUsuario.controls['telefone'].value, this.formUsuario.controls['telefone_secundario'].value,
      this.formUsuario.controls['endereco'].value, this.formUsuario.controls['bairro'].value,
      Number(this.formUsuario.controls['numero'].value) , this.formUsuario.controls['complemento'].value,
      this.formUsuario.controls['referencia'].value, this.formUsuario.controls['nome_pai'].value,
      this.formUsuario.controls['nome_mae'].value, this.formUsuario.controls['estado_civil'].value,
      this.formUsuario.controls['genero'].value, this.formUsuario.controls['nacionalidade'].value,
      this.formUsuario.controls['profissao'].value, this.formUsuario.controls['vendedor'].value,
      Number(this.formUsuario.controls['dia_vencimento'].value), this.formUsuario.controls['observacao'].value
    );
    this.criarUsuario((user_id: string) => {
      this.enviaUsuarioServico(user_id);
    });
  }

  criarUsuario(callBack: any) {
    this.serviceUser.create(this.user)
    .subscribe(
      resposta => {
        const user_id:any = resposta;
        callBack(user_id.id);
      }
    );
  }

  enviaUsuarioServico(user_id: string) {
    if (this.planoEscolhido != undefined) {
      this.serviceUsuarioServico.create(new UsuarioServico(user_id,this.planoEscolhido.id))
      .subscribe(
        resposta => {
          this.enviaUsuarioPacote(user_id);
        },
      );
    } else {
      this.openModalMessage("Erro inesperado","Erro ao salvar o plano escolhido.","error");
      this.reiniciaDados();
    }
  }

  enviaUsuarioPacote(user_id: string) {
    if (this.pacoteEscolhido != undefined) {
      this.serviceUsuarioPacote.create(new UsuarioPacote(user_id,this.pacoteEscolhido.id))
      .subscribe(
        resposta => {
          this.openModalMessage("Seja muito bem vindo a sempre internet","Você foi cadastrado para nossa promoção, aguarde nosso contato.","success");
          this.reiniciaDados();
        }
      );
    } else {
      this.openModalMessage("Seja muito bem vindo a sempre internet","Você foi cadastrado para nossa promoção, aguarde nosso contato.","success");
      this.reiniciaDados();
    }
  }

  reiniciaDados() {
    this.cep = '';
    this.planoEscolhido = undefined;
    this.pacoteEscolhido = undefined;
    this.step = 1;
    this.stepModal = 1;
    this.formUsuario = this.formValidator();
  }

  proximoPasso() {
    if (this.step == 2) {
      if (this.planoEscolhido !== undefined) {
        if(this.stepModal == 2) this.openModalMessage("Coloque seus dados","Preencha o formulario com seus dados, quanto mais dados, melhor.","success");
        if (this.stepModal == this.step) this.step++;
        if (this.stepModal < 3)this.stepModal++;
      } else if(this.stepModal == 2) this.openModalMessage("Escolha um plano","Escolha pelo menos um plano antes de continuar.","error");
    } else {
      if (this.step == 3) {
        if(this.stepModal == 3) this.openModalMessage("Verique os dados","Tudo esta preenchido corretamente. Verifique se há algum erro, se houver, clique na etapa e corrija-o.","success");
      }
      if (this.stepModal == this.step) this.step++;
      if (this.stepModal < 4) this.stepModal++;
    }
  }

  openModalMessage(titulo:string,descricao:string,feedback:string) {
    this.dialog.open(ModalMessageComponent,{data:{titulo:titulo,descricao:descricao,feedback:feedback}});
  }

  irParaEtapa(step: number) {
    this.step = step;
  }

  formValidator() {
    return this.fb.group({
      nome: ['', {
        Validators:[
          Validators.required,
          Validators.minLength(3)
        ], 
      }],
      cpf: ['', {
        Validators:[
          Validators.required,
          Validators.minLength(11)
        ], 
      }],
      rg: ['', {
        Validators:[
          Validators.required,
          Validators.minLength(8)
        ], 
      }],
      data_nascimento: ['', {
        Validators:[
          Validators.required,
          Validators.minLength(8)
        ], 
      }],
      telefone: ['', {
        Validators:[
          Validators.required,
          Validators.minLength(11)
        ], 
      }],
      telefone_secundario: [''],
      email: ['', {
        Validators:[
          Validators.required,
          Validators.email
        ], 
      }],
      endereco: ['', {
        Validators:[
          Validators.required,
          Validators.minLength(5)
        ], 
      }],
      bairro: ['', {
        Validators:[
          Validators.required,
          Validators.minLength(2)
        ], 
      }],
      numero: ['', {
        Validators:[
          Validators.required,
          Validators.minLength(1)
        ], 
      }],
      complemento: [''],
      referencia: [''],
      nome_pai: [''],
      nome_mae: [''],
      estado_civil: [''],
      genero: [''],
      nacionalidade: [''],
      profissao: [''],
      vendedor: ['', {
        Validators:[
          Validators.required,
          Validators.minLength(3)
        ], 
      }],
      dia_vencimento: ['', {
        Validators:[
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(2)
        ], 
      }],
      observacao:  [''],
    });
  }
  
}

