import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.controller.service';
import { MatDialog } from '@angular/material/dialog';
import { CourCModalComponent } from './cour-c-modal/cour-c-modal.component';
import { CourUModalComponent } from './cour-u-modal/cour-u-modal.component';

@Component({
  selector: 'app-adm-course',
  templateUrl: './adm-course.component.html',
  styleUrls: ['../admin.component.scss']
})
export class AdmCourseComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'isActive', 'createdOn', 'updatedOn'];
  dataSource: any;
  checkBoxArray = new Array();

  constructor(private course:CourseService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.course.courseAll().subscribe((data)=>{
      this.dataSource = data;
    });
  }
  onCheckChange(value: string) {
    if (this.checkBoxArray.length === 0) {
      this.checkBoxArray.push(value);
    } else {
      let x = 0;
      let i = null;
      for (x = 0; x < this.checkBoxArray.length; x++) {
        if (this.checkBoxArray[x] === value) {
          i = x;
        }
      }
      if (i != null) {
        this.checkBoxArray.splice(i,1);
      } else {
        this.checkBoxArray.push(value);
      }
    }
  }
  createCourse(){
    this.dialog.open(CourCModalComponent);
   }
  updateCourse(){
    this.dialog.open(CourUModalComponent, {
      data:{
        id: this.checkBoxArray[0],
      }
    });
  }
  deactivateCourse(){}
}
