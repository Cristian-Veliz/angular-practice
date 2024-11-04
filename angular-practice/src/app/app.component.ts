import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({ 
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-practice';
}

// @Component es un decorador
// standalone: true indica que no va a tener modulo , de la version 17 en adelante se crea asi, en versiones anteriores se crean con modulo. 