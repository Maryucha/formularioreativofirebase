import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-erro',
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.css']
})
export class ErroComponent implements OnInit {

  @Input()
  mensagem= '';

  constructor() { }

  ngOnInit(): void {
  }

}
