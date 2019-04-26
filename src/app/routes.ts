import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const allAppRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'login' },
  { path: 'weather', component: WeatherComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];