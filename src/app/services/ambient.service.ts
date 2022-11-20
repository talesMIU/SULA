import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { environment } from 'src/environments/environment';
import { Ambient } from "../models/model";
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AmbientService{
    constructor(private http: HttpClient) { }

    public ambientUpdate (id:string, ambient: Ambient): Promise<Ambient[]> {
        const url = `${environment.SULA_API}${environment.ambiServ}/update/${id}`;
        return this.http.put<Ambient[]>(url,ambient).toPromise();
    }
    public ambientCreate (ambient: Ambient): Promise<Ambient[]> {
        const url = `${environment.SULA_API}${environment.ambiServ}/create`;
        return this.http.post<Ambient[]>(url,ambient).toPromise();
    }
    public ambientById (id:string): Promise<Ambient[]> {
        const url = `${environment.SULA_API}${environment.ambiServ}/details/${id}`;
        return this.http.get<Ambient[]>(url).toPromise();
    }
    public ambientAll (): Promise<Ambient[]> {
        const url = `${environment.SULA_API}${environment.ambiServ}/all`;
        return this.http.get<Ambient[]>(url).toPromise();
    }
}