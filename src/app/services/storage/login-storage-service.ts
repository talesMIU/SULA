import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { LoginStorageKeys, UserToken } from "src/app/models/model";

@Injectable({
    providedIn: 'root'
})
export class LoginStorageService{

    private loggedUserSubject = new Subject<UserToken>();
    public loggedUserChange$ = this.loggedUserSubject.asObservable();

    constructor(){}

    public saveUserLogin(user: UserToken): void{
        let token = Object.values(user)[0];
        sessionStorage.setItem(LoginStorageKeys.token, token)
      //  sessionStorage.setItem(LoginStorageKeys.refreshToken, JSON.stringify(Object.values(user)[1]));
      //  sessionStorage.setItem(LoginStorageKeys.role, JSON.stringify(Object.values(user)[2]));
        this.loggedUserSubject.next(user);
    }
    public clearUser():void{
        sessionStorage.removeItem(LoginStorageKeys.token);
    //    sessionStorage.removeItem(LoginStorageKeys.refreshToken);
    //    sessionStorage.removeItem(LoginStorageKeys.role);
        this.loggedUserSubject.next();
    }
    //gets como void alterar para string
    public getUserToken(): string|null{
        return sessionStorage.getItem(LoginStorageKeys.token);
    }
    //public getUserRefreshToken(): string|null{
    //    return sessionStorage.getItem(LoginStorageKeys.refreshToken);
   // }
    //public getUserRole(): string|null{
    //    return sessionStorage.getItem(LoginStorageKeys.role);
   // }
}