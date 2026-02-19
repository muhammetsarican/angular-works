import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const childAuthGuard: CanActivateChildFn = (childRoute, state) => {
  const token = localStorage.getItem('token')

  const router = inject(Router)

  if (!token) {
    router.navigateByUrl('/login')
    return false
  }

  return true;
};
