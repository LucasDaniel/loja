import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-div-errors',
  templateUrl: './div-errors.component.html',
  styleUrl: './div-errors.component.scss'
})
export class DivErrorsComponent implements OnInit {

  @Input() labelError!: string;

  constructor() {}

  ngOnInit(): void {
    
  }

}
