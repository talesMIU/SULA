import { Component, OnInit, Inject } from '@angular/core';
import { StatusActive } from 'src/app/shared/statusActive';
import { CourseService } from 'src/app/services/course.controller.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-cour-u-modal',
  templateUrl: './cour-u-modal.component.html',
  styleUrls: ['./cour-u-modal.component.scss']
})
export class CourUModalComponent implements OnInit {

  courseName!:string;
  courseStat: any;
  courseId:any;
  oldName:any;
  courseStatus: StatusActive[] = [
    { value: true, viewValue: 'Activate' },
    { value: false, viewValue: 'Deactivate' },];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public course: CourseService ) { }

  ngOnInit(): void {
    this.courseId = Object.values(this.data)[0];
    this.course.courseById(this.courseId).subscribe((old:any)=>{this.oldName=old});
  }
  updateCourse(){}
}
