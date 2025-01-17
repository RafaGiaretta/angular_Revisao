import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: false,

  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css',
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Rafael';
  age: number = 31;
  job = 'Programador';

  car = {
    name: 'Polo',
    type: ['Carro', 'Moto', 'Caminhao'],
  };

  constructor() {}

  ngOnInit(): void {}
}
