import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBar } from '@jde/ui';
@Component({
  selector: 'app-root',
  imports: [NavBar, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  year = new Date().getFullYear();
}
