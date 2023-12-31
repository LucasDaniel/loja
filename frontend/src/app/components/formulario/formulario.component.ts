import { Component, Input, OnInit } from '@angular/core';
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
import { SendEmailService } from 'src/app/services/send-email/send-email.service';
import { SendEmail } from 'src/app/model/send-email.model';
import { Dictionary } from 'src/app/dictionary/dicionario.dictionary';
import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit {

  public dicionario = new Dictionary();

  public planoEscolhido:Servico | undefined;
  public pacoteEscolhido:Pacote | undefined;
  public step = 1;
  public stepModal = 1;
  public planosDisponiveis:Servico[] = [];
  public pacotesDisponiveis:Pacote[] = [];
  public formUsuario: FormGroup = this.formValidator();

  //Adicione aqui o email para ser enviado após a finalização do cadastro
  private toEmail = 'lucasdanielbeltrame@hotmail.com';
  private valorTotalEscolhido:any = 0;
  private user!: User;
  private cepsDisponiveis:string[] = [];

  constructor(
    private serviceCobertura: CoberturaService,
    private servicePacote: PacoteService,
    private serviceServico: ServicoService,
    private serviceUser: UserService,
    private serviceUsuarioServico: UsuarioServicoService,
    private serviceUsuarioPacote: UsuarioPacoteService,
    private serviceSendEmail: SendEmailService,
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
    this.reiniciaDados();
  }

  verificaCEP() {
    if(this.cepsDisponiveis.indexOf(this.formatCEP()) !== -1) {
      this.openModalMessage("Disponível","Esse CEP esta disponível para nossa super promoção!","success");
      this.proximoPasso();
    } else {
      this.openModalMessage("Não disponível","CEP "+this.formatCEP()+" não disponivel para a super promoção!","error");
      this.stepModal = 1;
    }
  }

  formatCEP() {
    return this.formUsuario.controls['cep'].value.substring(0,5)+"-"+this.formUsuario.controls['cep'].value.substring(5);
  }

  formatData(data:string) {
    return data.substring(0,2)+'/'+data.substring(2,4)+'/'+data.substring(4);
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
    if (this.planoEscolhido !== undefined) {
      this.openModalMessage("Coloque seus dados","Preencha o formulario com seus dados, quanto mais dados, melhor.","success");
      this.proximoPasso();
    } else if(this.stepModal == 2) this.openModalMessage("Escolha um plano","Escolha pelo menos um plano antes de continuar.","error");
  }

  resumoDaCompra() {
    this.openModalMessage("Verique os dados","Tudo esta preenchido corretamente. Verifique se há algum erro, se houver, clique na etapa e corrija-o.","success");
    this.proximoPasso();
  }

  salvar() {
    this.user = new User(
      this.formUsuario.controls['nome'].value,this.formUsuario.controls['email'].value,
      this.formUsuario.controls['cep'].value,this.formUsuario.controls['cpf'].value,
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
    .pipe(
      catchError(
        err => this.catchAuthError(err)
      ),
    )
    .subscribe(
      resposta => {
        const user_id:any = resposta;
        callBack(user_id.id);
      }
    );
  }

  catchAuthError(error: any): Observable<Response> {
    this.openModalMessage("Erro ao salvar",error.error.message[0],"error");
    return throwError(() => error);
  }

  enviaUsuarioServico(user_id: string) {
    if (this.planoEscolhido != undefined) {
      this.serviceUsuarioServico.create(new UsuarioServico(user_id,this.planoEscolhido.id))
      .pipe(
        catchError(
          err => this.catchAuthError(err)
        ),
      )
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
      .pipe(
        catchError(
          err => this.catchAuthError(err)
        ),
      )
      .subscribe(
        resposta => {
          this.openModalMessage("Seja muito bem vindo a sempre internet","Você foi cadastrado para nossa promoção, aguarde nosso contato.","success");
          this.enviaEmail();
          this.reiniciaDados();
        }
      );
    } else {
      this.openModalMessage("Seja muito bem vindo a sempre internet","Você foi cadastrado para nossa promoção, aguarde nosso contato.","success");
      this.enviaEmail();
      this.reiniciaDados();
    }
  }

  enviaEmail() {
    const sendEmail = new SendEmail(this.toEmail,this.preparaMensagem());
    this.serviceSendEmail.sendEmail(sendEmail)
      .subscribe(
        resposta => {
          console.log("Email enviado");
        }
      );
  }

  preparaMensagem() {

    const valorPlanoEscolhido = this.planoEscolhido?.nome+" | "+this.planoEscolhido?.velocidade+" | R$ "+this.planoEscolhido?.valor;
    const valorPacoteEscolhido = this.pacoteEscolhido !== undefined ? this.pacoteEscolhido?.nome+" | R$ "+this.pacoteEscolhido?.valor : '<br>';

    this.valorTotalEscolhido = this.planoEscolhido?.valor;

    if (this.pacoteEscolhido !== undefined) {
      this.valorTotalEscolhido += this.pacoteEscolhido?.valor;
    }

    return 'Um novo cliente esta a nossa espera<br>'+
           '-------------------------------------<br>'+
           'Data e Hora: '+this.getDataAtual()+'<br>'+
           '-------------------------------------<br>'+
            this.returnStringMensagem('nome')+
            this.returnStringMensagem('cpf')+
            this.returnStringMensagem('rg')+
            'DATA_NASCIMENTO: '+this.formatData(this.formUsuario.controls['data_nascimento'].value)+'<br>'+
            this.returnStringMensagem('telefone')+
            this.returnStringMensagem('telefone_secundario')+
            this.returnStringMensagem('cep')+
            this.returnStringMensagem('endereco')+
            this.returnStringMensagem('bairro')+
            this.returnStringMensagem('numero')+
            this.returnStringMensagem('complemento')+
            this.returnStringMensagem('referencia')+
            this.returnStringMensagem('nome_pai')+
            this.returnStringMensagem('nome_mae')+
            this.returnStringMensagem('estado_civil')+
            this.returnStringMensagem('genero')+
            this.returnStringMensagem('nacionalidade')+
            this.returnStringMensagem('profissao')+
            this.returnStringMensagem('vendedor')+
            this.returnStringMensagem('dia_vencimento')+
            this.returnStringMensagem('observacao')+
            '-------------------------------------<br>'+
            'Plano escolhido: '+valorPlanoEscolhido+'<br>'+
            'Pacote escolhido: '+valorPacoteEscolhido+'<br>'+
            'Valor total escolhido: R$ '+this.valorTotalEscolhido+'<br>'+
            '-------------------------------------'+
            '';
  }

  returnStringMensagem(arr:string) {
    return arr.toUpperCase()+': '+this.formUsuario.controls[arr].value+"<br>";
  }

  reiniciaDados() {
    this.planoEscolhido = undefined;
    this.pacoteEscolhido = undefined;
    this.step = 1;
    this.stepModal = 1;
    this.formUsuario = this.formValidator();
  }

  proximoPasso() {
    if (this.step+1 > this.stepModal) this.stepModal++;
    this.step++;
  }

  openModalMessage(titulo:string,descricao:string,feedback:string) {
    this.dialog.open(ModalMessageComponent,{data:{titulo:titulo,descricao:descricao,feedback:feedback}});
  }

  irParaEtapa(step: number) {
    this.step = step;
  }

  getDataAtual() {
    const date = new Date();
    return date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
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
          Validators.email,
        ], 
      }],
      cep: ['', {
        Validators:[
          Validators.required,
          Validators.minLength(9)
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
  
  verificaInvalido(ctrl:string) {
    return this.formUsuario.controls[ctrl].getError('required') === undefined && 
          !this.formUsuario.controls[ctrl].pristine && 
           this.formUsuario.controls[ctrl].touched;
  }

  verifcaNaoPreenchido(ctrl:string) {
    return this.formUsuario.controls[ctrl].getError('required') && 
          !this.formUsuario.controls[ctrl].pristine && 
           this.formUsuario.controls[ctrl].touched;
  }

  verificaPlanoEscolhidoUndefined() {
    return this.planoEscolhido == undefined;
  }
  
}

