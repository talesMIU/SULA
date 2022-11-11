import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { Schedule } from "../models/model";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ScheduleService{
    constructor(private http: HttpClient) { }

    public scheduleAll(): Observable<Schedule[]> {
        const url = `${environment.SULA_API}${environment.scheServ}/all`;
        return this.http.get<Schedule[]>(url);
    }
    public scheduleCreateUnique(schedule:Schedule): Observable<Schedule[]> {
        const url = `${environment.SULA_API}${environment.scheServ}/create/unique`;
        return this.http.post<Schedule[]>(url, schedule);
    }
    public scheduleCreateRecurrent(schedule:Schedule): Observable<Schedule[]> {
        const url = `${environment.SULA_API}${environment.scheServ}/all`;
        return this.http.post<Schedule[]>(url, schedule);
    }
    public scheduleUpdate(schedule:Schedule): Observable<Schedule[]> {
        const url = `${environment.SULA_API}${environment.scheServ}/all`;
        return this.http.put<Schedule[]>(url, schedule);
    }
    public scheduleById(id:string): Observable<Schedule[]> {
        const url = `${environment.SULA_API}${environment.scheServ}/details/${id}`;
        return this.http.get<Schedule[]>(url);
    }
    public scheduleAllById(id:string): Observable<Schedule[]> {
        const url = `${environment.SULA_API}${environment.scheServ}/all/${id}`;
        return this.http.get<Schedule[]>(url);
    }
    public scheduleAllBySemester(id:string, semester:string): Observable<Schedule[]> {
        const url = `${environment.SULA_API}${environment.scheServ}/all/${id}/${semester}`;
        return this.http.get<Schedule[]>(url);
    }
}