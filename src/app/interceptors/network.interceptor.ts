import { Injectable } from '@angular/core';


import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { AuthService } from '../services/AuthguardService';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor(public loader: LoadingService, private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    // impossible d'atteindre
    this.loader.show();
    // request = this.httpTokenInject(request)
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
