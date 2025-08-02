import { Routes } from '@angular/router';
import { CarsComponent } from './cars/cars';
import { DetailsComponent } from './details/details';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'details/:id', component: DetailsComponent },
];
