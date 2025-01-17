import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { ListService } from '../../service/list.service';

@Component({
  selector: 'app-list-render',
  standalone: false,

  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  constructor(private listService: ListService) {}
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
  removeAnimal(animal: Animal) {
    console.log('Removendo animal..');
    this.animals = this.listService.remove(this.animals, animal);
  }
}
