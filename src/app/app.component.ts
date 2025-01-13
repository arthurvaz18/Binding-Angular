import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppFilhoComponent } from "./app-filho/app-filho.component";
import { CommonModule } from '@angular/common';
import { PessoaComponent } from './pessoa/pessoa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppFilhoComponent, PessoaComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  personSelectedIndex: number | undefined;

    listPeople = [
      {name: 'Arthur Fernandes Vaz', age: 24,},
      {name: 'Alefe Fernandes Vaz', age: 27,},
      {name: 'Claudelino Fernandes Vaz', age: 50,},
      {name: 'Aniltamar Fernandes Vaz', age: 53,},
    ];

   selectPerson(index: number){
      console.log(index);
      this.personSelectedIndex = index;
    }
  }