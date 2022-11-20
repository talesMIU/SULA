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

    public maintenanceUpdate (id:string, maintenance: AmbientMaintenance): Promise<AmbientMaintenance[]> {
        const url = `${environment.SULA_API}${environment.mainServ}/update/${id}`;
        return this.http.put<AmbientMaintenance[]>(url,maintenance).toPromise();
    }
    public maintenanceCreate (maintenance: any): Promise<AmbientMaintenance[]> {
        const url = `${environment.SULA_API}${environment.mainServ}/create`;
        return this.http.post<AmbientMaintenance[]>(url,maintenance).toPromise();
    }
    public maintenanceById (id:string): Promise<AmbientMaintenance[]> {
        const url = `${environment.SULA_API}${environment.mainServ}/details/${id}`;
        return this.http.get<AmbientMaintenance[]>(url).toPromise();
    }
    public maintenanceAll (): Promise<AmbientMaintenance[]> {
        const url = `${environment.SULA_API}${environment.mainServ}/all`;
        return this.http.get<AmbientMaintenance[]>(url).toPromise();
    }
    public maintenanceAllById (id:string,): Promise<AmbientMaintenance[]> {
        const url = `${environment.SULA_API}${environment.mainServ}/all/${id}`;
        return this.http.get<AmbientMaintenance[]>(url).toPromise();
    }
}