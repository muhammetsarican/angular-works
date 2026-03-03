import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { authGuard } from './guard/auth-guard';
import { childAuthGuard } from './guard/child-auth-guard';
import { confirmLogoutGuard } from './guard/confirm-logout-guard';
import { inject } from '@angular/core';
import { HttpService } from './services/http.service';

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
    path: 'todo/:id',
    loadComponent: () => import('./pages/todo-detail/todo-detail').then((m) => m.TodoDetail),
    resolve: {
      todo: async ({ params }: ActivatedRouteSnapshot) => {
        const http = inject(HttpService)
        return http.get('https://jsonplaceholder.typicode.com/todos/' + params['id'])
      }
    },
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
