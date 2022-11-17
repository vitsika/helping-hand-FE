import { Injectable } from '@angular/core';


import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor(public loader: LoadingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.show();
    request = this.httpTokenInject(request)
    return next.handle(request).pipe(
      finalize(()=>{
        this.loader.hide();
      })
    );
  }

  httpTokenInject = (request: HttpRequest<any>) => {
    let newRequest = request.clone({
      headers:request.headers.append("Authorization",localStorage.getItem("idToken")!)
    })

    return newRequest
  }
}
