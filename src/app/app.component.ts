import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppFilhoComponent } from "./app-filho/app-filho.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppFilhoComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
name: string = 'Arthur';

manipulando(event: any){
  console.log(event);
  this.name = (event);
  
}
  }