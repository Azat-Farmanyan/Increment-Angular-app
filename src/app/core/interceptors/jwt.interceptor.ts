import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { userKey } from '../constants/authconstants';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const userDataJson = localStorage.getItem(userKey);
    const userData = JSON.parse(userDataJson as string);

    if (userData?.token) {
      const modRequest = request.clone({
        headers: request.headers.set(
          'authorization',
          `Bearer ${userData.token}`
        ),
      });
      // console.log(modRequest);

      return next.handle(modRequest);
    }
    return next.handle(request);
  }
}
