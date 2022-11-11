import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { environment } from 'src/environments/environment';
import { UserToken, UserValid, UserLogin } from "../models/model";
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService{
    constructor(private http: HttpClient) { }

    public getLogin (userLogin: FormData): Observable<UserToken[]> {
        const url = `${environment.SULA_API}${environment.userServ}/login`;
        return this.http.post<UserToken[]>(url,userLogin);
    }
    public userUpdate (id:string, user: UserValid): Observable<UserValid[]> {
        const url = `${environment.SULA_API}${environment.userServ}/update/${id}`;
        return this.http.post<UserValid[]>(url, user);
    }
    public userCreate (user: JSON): Observable<UserValid[]> {
        const url = `${environment.SULA_API}${environment.userServ}/create`;
        return this.http.post<UserValid[]>(url,user);
    }
    public userRefresh (): Observable<UserValid[]> {
        const url = `${environment.SULA_API}${environment.userServ}/refresh/token`;
        return this.http.get<UserValid[]>(url);
    }
    public userByName (userName: string): Observable<UserValid[]> {
        const url = `${environment.SULA_API}${environment.userServ}/details/username/${userName}`;
        return this.http.get<UserValid[]>(url);
    }
    public userById (id: string): Observable<UserValid[]> {
        const url = `${environment.SULA_API}${environment.userServ}/details/id/${id}`;
        return this.http.get<UserValid[]>(url);
    }
    public userAll (): Observable<UserValid[]> {
        const url = `${environment.SULA_API}${environment.userServ}/all`;
        return this.http.get<UserValid[]>(url);
    }
}