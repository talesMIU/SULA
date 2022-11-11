import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { environment } from 'src/environments/environment';
import { Course } from "../models/model";
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CourseService{
    constructor(private http: HttpClient) { }

    public courseUpdate (id:string, course: Course): Observable<Course[]> {
        const url = `${environment.SULA_API}${environment.courServ}/update/${id}`;
        return this.http.put<Course[]>(url, course);
    }
    public courseCreate (course: Course): Observable<Course[]> {
        const url = `${environment.SULA_API}${environment.courServ}/create`;
        return this.http.post<Course[]>(url, course);
    }
    public courseById (id:string): Observable<Course[]> {
        const url = `${environment.SULA_API}${environment.courServ}/details/${id}`;
        return this.http.get<Course[]>(url);
    }
    public courseAll (): Observable<Course[]> {
        const url = `${environment.SULA_API}${environment.courServ}/all`;
        return this.http.get<Course[]>(url);
    }
}