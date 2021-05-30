import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authService = this.injector.get(AuthService);
    if (authService.isLoggedIn()) {
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authService.getToken()}`,
        },
      });

      const reqCloned = this.handleBodyIn(
        tokenizedReq,
        authService.getCompanieId(),
        'idCompanie'
      );
      const copiedReq = reqCloned;
      return next.handle(copiedReq);
    }

    return next.handle(req);
  }

  handleBodyIn(req: HttpRequest<any>, tokenToAdd, tokenName) {
    if (req.method.toLowerCase() === 'post') {
      if (req.body instanceof FormData) {
        req = req.clone({
          body: req.body.append(tokenName, tokenToAdd),
        });
      } else {
        const foo = {};
        foo[tokenName] = tokenToAdd;
        req = req.clone({
          body: { ...req.body, ...foo },
        });
      }
    }
    if (req.method.toLowerCase() === 'get') {
      req = req.clone({
        params: req.params.set(tokenName, tokenName),
      });
    }

    return req;
  }
}
