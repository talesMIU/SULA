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

    public scheduleAll(): Promise<Schedule[]> {
        const url = `${environment.SULA_API}${environment.scheServ}/all`;
        return this.http.get<Schedule[]>(url).toPromise();
    }
    public scheduleCreateUnique(schedule:Schedule): Promise<Schedule[]> {
        const url = `${environment.SULA_API}${environment.scheServ}/create/unique`;
        return this.http.post<Schedule[]>(url, schedule).toPromise();
    }
    public scheduleCreateRecurrent(schedule:Schedule): Promise<Schedule[]> {
        const url = `${environment.SULA_API}${environment.scheServ}/all`;
        return this.http.post<Schedule[]>(url, schedule).toPromise();
    }
    public scheduleUpdate(schedule:Schedule): Promise<Schedule[]> {
        const url = `${environment.SULA_API}${environment.scheServ}/all`;
        return this.http.put<Schedule[]>(url, schedule).toPromise();
    }
    public scheduleById(id:string): Promise<Schedule[]> {
        const url = `${environment.SULA_API}${environment.scheServ}/details/${id}`;
        return this.http.get<Schedule[]>(url).toPromise();
    }
    public scheduleAllById(id:string): Promise<Schedule[]> {
        const url = `${environment.SULA_API}${environment.scheServ}/all/${id}`;
        return this.http.get<Schedule[]>(url).toPromise();
    }
    public scheduleAllBySemester(id:string, semester:string): Promise<Schedule[]> {
        const url = `${environment.SULA_API}${environment.scheServ}/all/${id}/${semester}`;
        return this.http.get<Schedule[]>(url).toPromise();
    }
}