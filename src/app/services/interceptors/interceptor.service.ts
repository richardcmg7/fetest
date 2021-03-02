import { AuthService } from './../auth.service';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (AuthService.getToken()) {

      req = req.clone({
        setHeaders: {
          authorization: `Bearer ${ AuthService.getToken() }`
        }
      });
    }


    return next.handle(req);
  }


}
