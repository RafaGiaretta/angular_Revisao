import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  standalone: false,

  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css',
})
export class TwoWayBindingComponent {
  visivel = 'none';
  showName() {
    this.visivel = this.visivel === 'none' ? 'block' : 'none'; // para treinar ternario
  }
  name: string = '';
}
