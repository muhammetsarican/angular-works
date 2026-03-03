import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  readonly #http: HttpClient = inject(HttpClient)

  get(url: string, options?: { headers?: {}, params?: {} }, errorCb?: (err: any) => void) {
    return this.#http.get(url, {
      ...options,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...options?.headers
      }),
      params: new HttpParams({
        ...options?.params
      })
    }).subscribe({
      next: (res) => {
        return res
      },
      error: (err) => {
        errorCb ? errorCb(err) : console.log(err)
      }
    })
  }

  post(url: string, body: any, options?: { headers?: {}, params?: {} }, errorCb?: (err: any) => void) {
    return this.#http.post(url, body, {
      ...options,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...options?.headers
      }),
      params: new HttpParams({
        ...options?.params
      })
    }).subscribe({
      next: (res) => {
        return res
      },
      error: (err) => {
        errorCb ? errorCb(err) : console.log(err)
      }
    })
  }

  put(url: string, body: any, options?: { headers?: {}, params?: {} }, errorCb?: (err: any) => void) {
    return this.#http.put(url, body, {
      ...options,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...options?.headers
      }),
      params: new HttpParams({
        ...options?.params
      })
    }).subscribe({
      next: (res) => {
        return res
      },
      error: (err) => {
        errorCb ? errorCb(err) : console.log(err)
      }
    })
  }

  delete(url: string, options?: { headers?: {}, params?: {} }, errorCb?: (err: any) => void) {
    return this.#http.delete(url, {
      ...options,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...options?.headers
      }),
      params: new HttpParams({
        ...options?.params
      })
    }).subscribe({
      next: (res) => {
        return res
      },
      error: (err) => {
        errorCb ? errorCb(err) : console.log(err)
      }
    })
  }
}
