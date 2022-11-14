import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent }
  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorsService implements HttpInterceptor{

  intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
    const httpReq = req.clone({
      url: req.url.replace("http://", "https://")
    });
    return next.handle(httpReq);
  }
  
}
