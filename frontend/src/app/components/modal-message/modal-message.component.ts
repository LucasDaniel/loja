import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrl: './modal-message.component.scss',
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-out'))
    ])
  ]
})
export class ModalMessageComponent implements OnInit {
  
  show = false;

  public titulo: string = '';
  public descricao: string = '';
  public feedback: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.titulo = this.data.titulo;
    this.descricao = this.data.descricao;
    this.feedback = this.data.feedback;
    this.toogle();
  }

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  toogle() {
    this.show = !this.show;
  }



  
}
