import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {
  
  nome = 'Igor';
  adicionado = false;  

}