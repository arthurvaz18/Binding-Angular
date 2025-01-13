import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pessoa',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pessoa.component.html',
  styleUrl: './pessoa.component.scss'
})
export class PessoaComponent {
@Input({required: true}) personName: string = '';
@Input({required: true}) personAge: number = 0;
@Input({required: true}) personIndex: number = 0;
@Input({required: true}) isFirst: boolean = false;
@Input({required: true}) isLast: boolean = false;
@Input({required: true}) isOdd: boolean = false;
@Input({required: true}) isSelected: boolean = false;


@Output('personSelected') onPersonSelectedEmitt = new EventEmitter<number>();

selectPerson() {
  this.onPersonSelectedEmitt.emit(this.personIndex);
  }
}