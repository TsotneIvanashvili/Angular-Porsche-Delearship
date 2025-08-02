import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BannerComponent } from "../banner/banner";

@Component({
  selector: 'app-home',
  imports: [RouterModule, BannerComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
