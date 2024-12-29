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
    console.log(this.inputText);
  }
  limpar(){
    this.inputText = ""
    this.inputType = ""
  }
}
