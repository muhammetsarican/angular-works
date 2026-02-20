import { Routes } from '@angular/router';
import { authGuard } from './guard/auth-guard';
import { childAuthGuard } from './guard/child-auth-guard';
import { confirmLogoutGuard } from './guard/confirm-logout-guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    // canActivateChild: [childAuthGuard],
    // canDeactivate: [confirmLogoutGuard],
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    children: [
      // {
      //   path: 'todo',
      //   loadComponent: () => import('./pages/todo/todo').then((m) => m.Todo)
      // },
      // {
      //   path: 'products',
      //   loadComponent: () => import('./pages/product/product').then((m) => m.Product)
      // },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login').then((m) => m.Login)
  },
  {
    path: 'todo',
    loadComponent: () => import('./pages/todo/todo').then((m) => m.Todo)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/product/product').then((m) => m.Product)
  },
  {
    path: 'options',
    loadComponent: () => import('./pages/options/options').then((m) => m.Options)
  },
];
