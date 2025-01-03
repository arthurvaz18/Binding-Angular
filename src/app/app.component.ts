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
  widthButton1 = '100px';
  widthButton2 = '100px';
  widthButton3 = '100px';
  cor = 'white';

  stylesObj={
    width: '100px',
    backgroundColor:'grey',
  }
  updateStyleObj(){
    console.log('updateStyleObj');

    this.stylesObj.width = '170px';
    this.stylesObj.backgroundColor = 'lightblue';
  }
  updateStyleObjCorrect(){
    console.log('updateStyleOnjCorrect');

    this.stylesObj ={
      width: '170px',
      backgroundColor: 'lighblue'
    };
  }
  updateWidth(){
    this.widthButton2 = '200px';
  }
  }
