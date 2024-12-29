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
  buttonTitle = 'titulo do botão';
  buttonDisable = false;

  onButonClick(){
    this.buttonTitle = 'titulo ALTERADOOOO'
    this.buttonDisable = true;
  }
}