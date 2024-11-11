import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';

@Component({ 
  selector: 'app-root',
  standalone: true, 
  imports: [ RouterOutlet, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-practice';
}

// @Component es un decorador
// standalone: true indica que no va a tener modulo , de la version 17 en adelante se crea asi, en versiones anteriores se crean con modulo. 