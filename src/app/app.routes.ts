import { Routes } from '@angular/router';
import { authGuard } from './pages/guard/auth-guard';
import { childAuthGuard } from './pages/guard/child-auth-guard';
import { confirmLogoutGuard } from './pages/guard/confirm-logout-guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    // canActivateChild: [childAuthGuard],
    canDeactivate: [confirmLogoutGuard],
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    children: [
      {
        path: 'todo',
        loadComponent: () => import('./pages/todo/todo').then((m) => m.Todo)
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login').then((m) => m.Login)
  },
];
