import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { environment } from 'src/environments/environment';
import { Notification } from "../models/model";
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class NotificationService{
    constructor(private http: HttpClient) { }

    public notificationUpdate (id:string, notification: Notification): Observable<Notification[]> {
        const url = `${environment.SULA_API}${environment.notiServ}/update/${id}`;
        return this.http.put<Notification[]>(url,notification);
    }
    public notificationCreate (notification: Notification): Observable<Notification[]> {
        const url = `${environment.SULA_API}${environment.notiServ}/create`;
        return this.http.post<Notification[]>(url,notification);
    }
    public notificationById (id:string): Observable<Notification[]> {
        const url = `${environment.SULA_API}${environment.notiServ}/details/${id}`;
        return this.http.get<Notification[]>(url);
    }
    public notificationAll (): Observable<Notification[]> {
        const url = `${environment.SULA_API}${environment.notiServ}/all`;
        return this.http.get<Notification[]>(url);
    }
    public notificationByStatus (status:string): Observable<Notification[]> {
        const url = `${environment.SULA_API}${environment.notiServ}/all/${status}`;
        return this.http.get<Notification[]>(url);
    }
}