import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home').then((m) => m.Home)
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login').then((m) => m.Login)
  },
];
