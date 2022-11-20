import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { environment } from 'src/environments/environment';
import { SubjectName } from "../models/model";
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SubjectService{
    constructor(private http:HttpClient) { }

    public subjectCreate (subject: JSON): Promise<SubjectName[]>{
        const url = `${environment.SULA_API}${environment.subjServ}/create`;
        return this.http.post<SubjectName[]>(url, subject).toPromise();
    }
    public subjectUpdate (id:string,subject: SubjectName): Promise<SubjectName[]> {
        const url = `${environment.SULA_API}${environment.subjServ}/update/${id}`;
        return this.http.put<SubjectName[]>(url, subject).toPromise();
    }
    public subjectById (id:string): Promise<SubjectName[]> {
        const url = `${environment.SULA_API}${environment.subjServ}/details/${id}`;
        return this.http.get<SubjectName[]>(url).toPromise();
    }
    public subjectAll (): Promise<SubjectName[]> {
        const url = `${environment.SULA_API}${environment.subjServ}/all`;
        return this.http.get<SubjectName[]>(url).toPromise();
    }
}