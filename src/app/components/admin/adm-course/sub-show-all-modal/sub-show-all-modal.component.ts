import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseService } from 'src/app/services/course.controller.service';

@Component({
  selector: 'app-sub-show-all-modal',
  templateUrl: './sub-show-all-modal.component.html',
  styleUrls: ['./sub-show-all-modal.component.scss']
})
export class SubShowAllModalComponent implements OnInit {

  loading!:boolean;
  subjects=new Array();
  courseName!:any;
  courseId!:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private course: CourseService) { }

  ngOnInit(): void {
    this.loading=false;
    this.courseId = Object.values(this.data)[0];
    this.course.courseById(this.courseId).then((data:any)=>{
      this.courseName=data;
      this.subjects = data.subjects;
    });
  }

}
