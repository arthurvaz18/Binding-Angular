import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-angular';
  //passando para propriedade
  inputText = "Apague e Digite aqui";
  inputType = "text";
  isDisabled = false;

  enableInput(){
    this.isDisabled = false;
  }
  disabledInput(){
    this.isDisabled = true;
  }
  setSenha(){
    this.inputType = 'password';
  }
  setTexto(){
    this.inputType = 'text';
  }
  meuLog(){
    console.log('logou');
  }
  limpar(){
    this.inputText = ""
    this.inputType = ""
  }
// monitorar e capturar o valor digitado em um campo 
// de entrada de texto (<input>) sempre que o usuário soltar uma tecla. 
  handleInputKeyup(event: KeyboardEvent){
    const textoAtual = (event.target as HTMLInputElement).value
    console.log(textoAtual);
  }
}
