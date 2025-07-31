import { Routes } from '@angular/router';
import { CarsComponent } from './cars/cars';
import { DetailsComponent } from './details/details';

export const routes: Routes = [
  { path: '', component: CarsComponent },
  { path: 'details/:id', component: DetailsComponent },
];
