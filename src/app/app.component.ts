import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppFilhoComponent } from "./app-filho/app-filho.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppFilhoComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selecionaPessoaIndex: number | undefined;

    listaPessoas = [
      {nome: 'Arthur Fernandes Vaz', idade: 24,},
      {nome: 'Alefe Fernandes Vaz', idade: 27,},
      {nome: 'Claudelino Fernandes Vaz', idade: 50,},
      {nome: 'Aniltamar Fernandes Vaz', idade: 53,},
    ];

    selecionaPessoa(index: number){
      console.log(index);
      this.selecionaPessoaIndex = index;
    }
  }