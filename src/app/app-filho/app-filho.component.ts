import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-filho',
  standalone: true,
  imports: [],
  templateUrl: './app-filho.component.html',
  styleUrl: './app-filho.component.scss'
})
export class AppFilhoComponent {
    @Input() recebeInformacaoDoPai?: string;
    @Output() enviaInformacaoParaOPai = new EventEmitter<string>();

    disparaInformacaoParaOPai(){
      this.enviaInformacaoParaOPai.emit('Envia informações para o Pai');
    }
}
