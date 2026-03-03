import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const clone = req.clone({
    headers: new HttpHeaders({
      Authorization: 'Bearer token...',
      'X-Year': '2026',
    }),
  });
  return next(clone);
};
