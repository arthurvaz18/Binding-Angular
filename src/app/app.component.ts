import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFilhoComponent } from "./app-filho/app-filho.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppFilhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  botaoVermelho = true;
  botaoVerde = true;

  informacao?: string;
  InformacaoDoFilho?: string;

  getInformacao(){
    this.informacao = 'Informacao do pai para o filho';
  }
  recebendoInformacaoDoFilho(event: string): void{
      this.InformacaoDoFilho = event;
  }
  }
