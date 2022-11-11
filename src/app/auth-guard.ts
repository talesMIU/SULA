import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginStorageService } from "./services/storage/login-storage-service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    
    constructor(
        protected router: Router,
        private loginStorageService: LoginStorageService
    ){}
    canActivate(): Observable<boolean> | boolean {
        const mayLog = this.loginStorageService.getUserToken();
        if(mayLog){
            return true;
        }else{
            return false;
        }        
    }
}