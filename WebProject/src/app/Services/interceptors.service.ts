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

/*


import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { UserService } from '../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor {
  @BlockUI() blockUI: NgBlockUI;
  constructor(public toastr: ToastrService, private router: Router, private userService: UserService) {
    this.toastr.toastrConfig.positionClass = 'toast-top-full-width';
    this.toastr.toastrConfig.preventDuplicates = true;
    this.toastr.toastrConfig.iconClasses = {
      error: 'fas fa-exclamation-circle error',
      info: 'fas fa-info-circle info',
      success: 'fas fa-check-circle success',
      warning: 'warning',
    }
  }
  intercept(request: HttpRequest, next: HttpHandler): Observable> {
    let token = localStorage.getItem('token');
    if(token == null) {
  token = '';
}

request = request.clone({
  setHeaders: {
    'authorization': token
  },
});
this.blockUI.start();
return next.handle(request)
  .map((event: HttpEvent) => {
    if (event instanceof HttpResponse) {
      if (event.body.meta.code !== 0 && event.body.meta.message) {
        this.toastr.error(event.body.meta.message);
        this.blockUI.stop();
        return null;
      }
      if (event.body.meta.code === 0 && event.body.meta.message) {
        this.toastr.success(event.body.meta.message);
      }
      this.blockUI.stop();
      return event;
    }
  })
  .catch(err => {
    if (err.status === 401 || err.status === 403) {
      this.blockUI.stop();
      this.toastr.error('Por favor loguearse.');
      this.router.navigate(['login']);
      return Observable.throw(err);
    }

    if (err.status < 200 || err.status >= 300) {
      this.blockUI.stop();
      this.toastr.error('Ocurrio un problema. Por favor intenta nuevamente...');
      return Observable.throw(err);
    }
  });
}
}
*/