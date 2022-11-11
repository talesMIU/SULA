import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.controller.service';

@Component({
  selector: 'app-cour-c-modal',
  templateUrl: './cour-c-modal.component.html',
  styleUrls: ['./cour-c-modal.component.scss']
})
export class CourCModalComponent implements OnInit {

  courseName!:string;
  courseSubject!:string;
  constructor() { }

  ngOnInit(): void {
  }
  newCourse(){}
}
