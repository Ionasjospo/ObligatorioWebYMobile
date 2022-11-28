import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InterceptorsService implements HttpInterceptor {
  constructor(private route : Router){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    try {
       const token = localStorage.getItem('jwt');
      
      if (!token) {
          
         return next.handle(req);
      }
      req = req.clone({
        setHeaders: {
          'authorization': token
        },
      }); 
      
    } catch (err : any) {
      if (err.status === 401 || err.status === 403) {
        this.route.navigate(["/home"]);
        throwError(() => new Error(err))
      }

      if (err.status < 200 || err.status >= 300) {

        throwError(() => new Error(err))
      }

    };
    return next.handle(req);
  }
}
