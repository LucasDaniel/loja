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

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit {

  public cep = '32010-770';
  public planoEscolhido:Servico | undefined;
  public pacoteEscolhido:Pacote | undefined;
  public nome = 'aaa';
  public email = 'aaa@email.com';
  public step = 1;
  public planosDisponiveis:Servico[] = [];
  public pacotesDisponiveis:Pacote[] = [];

  private user!: User;
  private cepsDisponiveis:string[] = [];

  constructor(
    private serviceCobertura: CoberturaService,
    private servicePacote: PacoteService,
    private serviceServico: ServicoService,
    private serviceUser: UserService,
    private serviceUsuarioServico: UsuarioServicoService,
    private serviceUsuarioPacote: UsuarioPacoteService,
    public dialog: MatDialog
  ) {}

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
    if(this.cepsDisponiveis.indexOf(this.cep) !== -1) {
      this.openModalMessage("Disponível","Esse CEP esta disponível para nossa super promoção!","success");
      this.proximoPasso();
    } else {
      this.openModalMessage("Não disponível","CEP "+this.cep+" não disponivel para a super promoção!","error");
    }
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
    if (this.nome != '' && this.email != '')
    this.user = new User(this.nome,this.email,this.cep);
    this.serviceUser.create(this.user)
    .subscribe(
      resposta => {
        const user_id:any = resposta;
        if (this.planoEscolhido != undefined) {
          this.serviceUsuarioServico.create(new UsuarioServico(user_id.id,this.planoEscolhido.id))
          .subscribe(
            resposta => {
              if (this.pacoteEscolhido != undefined) {
                this.serviceUsuarioPacote.create(new UsuarioPacote(user_id.id,this.pacoteEscolhido.id))
                .subscribe(
                  resposta => {
                    alert("Tudo salvo com sucesso!!");
                  }
                );
              } else {
                alert("Tudo salvo com sucesso!");
              }
            },
          );
        } else {
          alert("Erro ao salvar o plano escolhido");
        }
      }
    );
    this.step = 1;
    this.reiniciaDados();
  }

  reiniciaDados() {
    this.cep = '32010-770';
    this.planoEscolhido = undefined;
    this.pacoteEscolhido = undefined;
    this.nome = 'aaa';
    this.email = 'aaa@email.com';
    this.step = 1;
  }

  proximoPasso() {
    if (this.step == 2) {
      if (this.planoEscolhido !== undefined) this.step++;
      else alert("Escolha pelo menos um plano");
    } else {
      this.step++;
    }
  }

  openModalMessage(titulo:string,descricao:string,feedback:string) {
    this.dialog.open(ModalMessageComponent,{data:{titulo:titulo,descricao:descricao,feedback:feedback}});
  }
  
}

