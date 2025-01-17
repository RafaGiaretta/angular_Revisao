import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: false,

  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css',
})
export class EventosComponent {
  show: Boolean = true;
  showMessage(): void {
    this.show = !this.show; // inverte o valor do show
  }
}
