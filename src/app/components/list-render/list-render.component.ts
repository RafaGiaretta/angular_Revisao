import { Component } from '@angular/core';
import { Animal } from '../../Animal';
@Component({
  selector: 'app-list-render',
  standalone: false,

  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 6 },
    { name: 'Tom', type: 'Cat', age: 10 },
    { name: 'Frida', type: 'Dog', age: 5 },
    { name: 'Bob', type: 'Horse', age: 2 },
  ];
  animalDetails = '';
  showAge(animal: Animal) {
    this.animalDetails = `O animal ${animal.name} tem ${animal.age} anos!`;
  }
}
