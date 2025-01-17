import { Component } from '@angular/core';

@Component({
  selector: 'app-diretives',
  standalone: false,
  
  templateUrl: './diretives.component.html',
  styleUrl: './diretives.component.css'
})
export class DiretivesComponent {
  size = 40;
  font = 'Arial';
  color = 'red';

  classes = ['green-title', 'small-title'];
}
