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
  constructor(private listService: ListService) {
    this.getAnimals();
  }

  animals: Animal[] = [];

  animalDetails = '';
  showAge(animal: Animal) {
    this.animalDetails = `O animal ${animal.name} tem ${animal.age} anos!`;
  }
  removeAnimal(animal: Animal) {
    console.log('Removendo animal..');
    this.animals = this.listService.remove(this.animals, animal);
  }
  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
