import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: false,

  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  someText = 'TESTANDO O PIPE ALTERATION titlecase';
  today = new Date();
}
