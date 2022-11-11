import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import{ catchError } from 'rxjs/operators';
import { InjectableCompiler } from "@angular/compiler/src/injectable_compiler";
import { LoginStorageKeys } from "../models/model";
import { LoginStorageService } from "../services/storage/login-storage-service";
import { Observable, throwError } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class TonkenInterceptor implements HttpInterceptor {
    constructor(private loginStorageService: LoginStorageService ){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.loginStorageService.getUserToken();
        if(token && request.url != 'https://api-sula.herokuapp.com/schedule/all' && request.url != 'https://api-sula.herokuapp.com/user/login'
          && request.url != 'https://api-sula.herokuapp.com/user/create' && request.url != 'https://api-sula.herokuapp.com/user/refresh/token' ){
            request = request.clone({
                setHeaders:{
                    Authorization: `Bearer ${token}`,
                }
            });
        }
        return next.handle(request).pipe(
            catchError((err) => {
                if (err.status === 401){
                    window.location.href = '/login';
                }
                const error = err.error.message || err.statusText;
                return throwError(error);
            })
        );
    }
}