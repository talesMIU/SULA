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

  courseName!: string;
  courseSelect = new Array();
  selectedSuject = new Array();
  subjectNames = new Array();
  subj= new Array();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private course: CourseService, private subject: SubjectService) { }

  ngOnInit(): void {
    this.selectedSuject = Object.values(this.data);
    let x;
    for (x = 0; x < this.selectedSuject[0].length; x++) {
      this.subject.subjectById(this.selectedSuject[0][x]).then((result: any) => {
        this.subjectNames = Object.values(result);
        this.subj.push(this.subjectNames[1])
      });
    }    
    this.course.courseAll().then((courses:any)=>{
    this.courseSelect=courses;
    });
  }
  addSub() {
   }
}
