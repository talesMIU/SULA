import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { environment } from 'src/environments/environment';
import { AmbientMaintenance } from "../models/model";
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AmbientMaintenanceService{
    constructor(private http: HttpClient) { }

    public maintenanceUpdate (id:string, maintenance: AmbientMaintenance): Observable<AmbientMaintenance[]> {
        const url = `${environment.SULA_API}${environment.mainServ}/update/${id}`;
        return this.http.put<AmbientMaintenance[]>(url,maintenance);
    }
    public maintenanceCreate (maintenance: AmbientMaintenance): Observable<AmbientMaintenance[]> {
        const url = `${environment.SULA_API}${environment.mainServ}/create`;
        return this.http.post<AmbientMaintenance[]>(url,maintenance);
    }
    public maintenanceById (id:string): Observable<AmbientMaintenance[]> {
        const url = `${environment.SULA_API}${environment.mainServ}/details/${id}`;
        return this.http.get<AmbientMaintenance[]>(url);
    }
    public maintenanceAll (): Observable<AmbientMaintenance[]> {
        const url = `${environment.SULA_API}${environment.mainServ}/all`;
        return this.http.get<AmbientMaintenance[]>(url);
    }
    public maintenanceAllById (id:string,): Observable<AmbientMaintenance[]> {
        const url = `${environment.SULA_API}${environment.mainServ}/all/${id}`;
        return this.http.get<AmbientMaintenance[]>(url);
    }
}