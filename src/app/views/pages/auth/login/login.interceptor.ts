import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginService } from 'src/app/services/administrator/login.service';

@Injectable({providedIn: "root"})

export class LoginInterceptor implements HttpInterceptor{
  constructor(
    private router: Router,
    private loginService: LoginService,
  ){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if(localStorage.getItem('tokenSessao') != null){
      const cloneReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('tokenSessao')}`)
      });
      return next.handle(cloneReq).pipe(
        tap(
          succ => {
              return next.handle(req).pipe(
                //finalize(() => this.loaderService.hide())
            );
          },
          err => {if(err.status == 401){
              return this.loginService.logoutUsuario();
              //this.router.navigateByUrl('')
            }
          }
        )
      )
    }else{
      return next.handle(req.clone())
    }
  }
}
