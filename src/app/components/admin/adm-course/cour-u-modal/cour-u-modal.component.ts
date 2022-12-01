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
  loading!:boolean;
  courseStatus: StatusActive[] = [
    { value: true, viewValue: 'Activate' },
    { value: false, viewValue: 'Deactivate' },];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public course: CourseService ) { }

  ngOnInit(): void {
    this.loading=false;
    this.courseId = Object.values(this.data)[0];
    this.course.courseById(this.courseId).then((old:any)=>{this.oldName=old});
  }
  updateCourse(){
    this.loading=true;
    this.course.courseById(this.courseId).then((result:any)=>{
      if(this.courseName){
        result.name = this.courseName;
      }
      if(this.courseStat){
        result.isActive=this.courseStat;
      }
      this.course.courseUpdate(this.courseId, result).then((data)=>{console.log(data)}).finally(()=>{setTimeout(()=>{window.location.reload();}, 3000)});
    })
  }
}
