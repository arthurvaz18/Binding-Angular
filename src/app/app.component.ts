import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppFilhoComponent } from "./app-filho/app-filho.component";
import { CommonModule } from '@angular/common';
import { PessoaComponent } from './pessoa/pessoa.component';
import { StatusClassPipe } from './pipes/status-class.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppFilhoComponent, PessoaComponent, StatusClassPipe, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  pessoa = {
    name:'Arthur',
    status: 1,
  };
  pessoa2 = {
    name:'Aniltamar',
    status: 2,
  };
  pessoa3 = {
    name:'Alefe',
    status: 3,
  };

}