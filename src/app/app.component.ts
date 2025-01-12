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
minhaProp =true;
pessoa: any ={
  status:1,
  name: undefined,
}

toggleProp(){
  this.minhaProp = !this.minhaProp;
}
istruthy(){
  //return {};
  //return [];
  //return true;
  //return 1;
  //return "teste";
  //return 'teste';
  //return "0";
  //return "false";
  //return "this.pessoa.status";
  
}

isfalse(){
  //return false;
  //return 0;
  //return "";
  //return '';
  //return null;
  //return "teste";
  //return undefined;
  //return "-0";
  //return NaN;
  //return this.pessoa.name;
  
}

  }