import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseService } from 'src/app/services/course.controller.service';
import { Course } from 'src/app/models/model';
import { SubjectName } from 'src/app/models/model';
import { SubjectService } from 'src/app/services/subject.service';
import { newArray } from '@angular/compiler/src/util';
@Component({
  selector: 'app-cou-a-modal',
  templateUrl: './cou-a-modal.component.html',
  styleUrls: ['./cou-a-modal.component.scss']
})
export class CouAModalComponent implements OnInit {

  courseId!: string;
  courseSelect = new Array();
  selectedSuject = new Array();
  subjectNames = new Array();
  subj = new Array();
  loading!: boolean;
  xJSON!: string;
  yJSON!: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private course: CourseService, private subject: SubjectService) { }

  ngOnInit(): void {
    this.loading = false;
    this.selectedSuject = Object.values(this.data);
    let x;
    for (x = 0; x < this.selectedSuject[0].length; x++) {
      this.subject.subjectById(this.selectedSuject[0][x]).then((result: any) => {
        this.subjectNames = Object.values(result);
        this.subj.push(this.subjectNames[1])
      });
    }
    this.course.courseAll().then((courses: any) => {
      this.courseSelect = courses;
    });
  }
  addSub() {
    this.loading=true
    /*
    let x = 0;
    let y = 0;
    let a= new Array();
    let b = 0;
    let z = new Array();
    for (x = 0; x < this.selectedSuject[0].length; x++) {
      this.subject.subjectById(this.selectedSuject[0][x]).then((data: any) => {
        z.push(data);
        this.course.courseById(this.courseId).then((result: any) => {
          this.xJSON = JSON.stringify(data);
          for (y = 0; y < result.subjects.length; y++) {
            this.yJSON = JSON.stringify(result.subjects[y]);
            if (this.xJSON === this.yJSON) {
            let c =x-1;
              a.push(c);
            }
          }
        });    
      });
      for(b=0;b<a.length;b++){
        let d=a[b]
        z.splice(z[d]);
      }
      console.log(z);
    }

     const stringJSON = JSON.stringify(this.courseName);
     console.log(stringJSON);*/
     setTimeout(()=>{window.location.reload();}, 4000);
  }
}
