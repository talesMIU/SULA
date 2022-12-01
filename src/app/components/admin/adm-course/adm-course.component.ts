import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.controller.service';
import { MatDialog } from '@angular/material/dialog';
import { CourCModalComponent } from './cour-c-modal/cour-c-modal.component';
import { CourUModalComponent } from './cour-u-modal/cour-u-modal.component';
import { SubShowAllModalComponent } from'./sub-show-all-modal/sub-show-all-modal.component';
@Component({
  selector: 'app-adm-course',
  templateUrl: './adm-course.component.html',
  styleUrls: ['../admin.component.scss']
})
export class AdmCourseComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'isActive', 'createdOn', 'updatedOn'];
  dataSource: any;
  checkBoxArray = new Array();
  loading!:boolean;
  constructor(private course:CourseService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loading=false;
    this.course.courseAll().then((data)=>{
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
  deactivateCourse(){
    this.loading=true;
    this.course.courseAll().then((data)=>{
      for (let ob of data) {
        let y = 0;
        for (y = 0; y < this.checkBoxArray.length; y++) {
          if (this.checkBoxArray[y] === ob.id) {
            ob.isActive = false;
            let stringOb = JSON.stringify(ob);
            let jsonOb = JSON.parse(stringOb);
            this.course.courseUpdate(this.checkBoxArray[y], jsonOb).then((data) => { console.log('desativado') }).finally(()=>{setTimeout(()=>{window.location.reload();}, 3000)});
          }
        }
      }
    }); 
  }
  viewSub(){
    this.dialog.open(SubShowAllModalComponent, {
      data:{
        id: this.checkBoxArray[0],
      }
    });
  }
}
