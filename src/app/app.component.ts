import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'Joaquim';
  userData = {
    email : 'joaquim@email.com',
    role: 'Admin',
  }
  
  title = 'curso-angular';
}
