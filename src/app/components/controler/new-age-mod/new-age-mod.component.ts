import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { CourseService } from 'src/app/services/course.controller.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { AmbientService } from 'src/app/services/ambient.service';
import { Time } from 'src/app/shared/time';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-age-mod',
  templateUrl: './new-age-mod.component.html',
  styleUrls: ['./new-age-mod.component.scss']
})
export class NewAgeModComponent implements OnInit {

  tipoAgendamento: any;
  courseSelect = new Array();
  courseName!: any;
  subjectSelect = new Array();
  subjectName!: any;
  isSubDisabled!: boolean;
  ambientSelect = new Array();
  ambientName!: any;
  isEndDisabled!: boolean;
  endTime: any;
  startTime: any;
  startDate = new Date();
  timeSelect: Time[] = [
    { value: 0, viewValue: '07:00' },
    { value: 1, viewValue: '08:00' },
    { value: 2, viewValue: '09:00' },
    { value: 3, viewValue: '10:00' },
    { value: 4, viewValue: '11:00' },
    { value: 5, viewValue: '12:00' },
    { value: 6, viewValue: '13:00' },
    { value: 7, viewValue: '14:00' },
    { value: 8, viewValue: '15:00' },
    { value: 9, viewValue: '16:00' },
    { value: 10, viewValue: '17:00' },
    { value: 11, viewValue: '18:00' },
    { value: 12, viewValue: '19:00' },
    { value: 13, viewValue: '20:00' },
    { value: 14, viewValue: '21:00' },];
  endTimeSelect = new Array;
  userId: any;
  userObj:any;
  ages: string[] = ['Once', 'Recurrent'];

  constructor(private course: CourseService, private subject: SubjectService, private schedule: ScheduleService, private ambient: AmbientService, private user: UserService) { }

  ngOnInit(): void {
    this.isSubDisabled = true;
    this.isEndDisabled = true;
    this.userId = sessionStorage.getItem('uId');
    this.user.userById(this.userId).subscribe((data)=>{this.userObj=data});
    this.course.courseAll().then((data) => {
      this.courseSelect = data;
    });
    this.ambient.ambientAll().then((data) => {
      this.ambientSelect = data;
    });
  }

  onSelectCourse(data: any) {
    this.subjectSelect = data.value.subjects;
    this.isSubDisabled = false
    console.log(data.value.subjects);
  }
  onSelectTime(data: any) {
    let y = 0;
    this.endTimeSelect = [];
    console.log(data);
    for (let x of this.timeSelect) {
      if (x.value > data.value.value) {
        this.endTimeSelect[y] = x;
        y++
      }
    }
    this.isEndDisabled = false;
  }
  newSchedule() {
    console.log('lop');
    const startDateJSON = JSON.stringify(this.startDate).split('"');
    let dateJSON = JSON.stringify(startDateJSON[1]).split('T');
    const startTimeJSON = JSON.stringify(this.startTime.viewValue).split('"');
    const endTimeJSON = JSON.stringify(this.endTime.viewValue).split('"');
    dateJSON[0]=dateJSON[0].replace('"','');
    const newStartDate = dateJSON[0] + 'T' + startTimeJSON[1] + '.084Z';
    const newEndDate = dateJSON[0] + 'T' + endTimeJSON[1] + '.084Z';
    console.log(newStartDate);
    if(this.tipoAgendamento==='Once'){
      let objString = JSON.stringify({user: this.userObj, ambient:this.ambientName, course: this.courseName, subject: this.subjectName, startDate: newStartDate, endDate: newEndDate});
      let objJson = JSON.parse(objString);
      this.schedule.scheduleCreateUnique(objJson).then((data)=>{console.log(data)})
    }
  }
}
