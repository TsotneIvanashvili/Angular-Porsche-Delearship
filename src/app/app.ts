import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar";
import { CarsComponent } from "./cars/cars";

@Component({
  selector: 'app-root',
  imports: [RouterModule, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CarShop');
}
