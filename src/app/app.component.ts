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
  isGreen: boolean = true;

  setToGreen(){
    this.isGreen = true;
  }

  setToOrange(){
    this.isGreen = false;
  }
}