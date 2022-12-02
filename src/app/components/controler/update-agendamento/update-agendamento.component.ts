import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { CourseService } from 'src/app/services/course.controller.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { AmbientService } from 'src/app/services/ambient.service';
import { Time } from 'src/app/shared/time';
import { UserService } from 'src/app/services/user.service';
import { ComboBox } from 'src/app/shared/comboBox';
@Component({
  selector: 'app-update-agendamento',
  templateUrl: './update-agendamento.component.html',
  styleUrls: ['./update-agendamento.component.scss']
})
export class UpdateAgendamentoComponent implements OnInit {

  update: any;
  ups: ComboBox[]=[
    {value: 'Update', viewValue:'Update'},
    {value: 'Cancel Schedule', viewValue:'Cancel Schedule'},
  ];
  upsPT: ComboBox[]=[
    {value: 'Update', viewValue:'Atualizar'},
    {value: 'Cancel Schedule', viewValue:'Cancelar Apontamento'},
  ];
  atu = 'Update';
  can = 'Cancel Schedule';
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
  agesPT:ComboBox[]=[
    {value: 'Once', viewValue:'Único'},
    {value: 'Recurrent', viewValue:'Recorrente'},
  ];
  ages: string[] = ['Once', 'Recurrent'];
  selectedLanguage!:any;

  constructor(private course: CourseService, private subject: SubjectService, private schedule: ScheduleService, private ambient: AmbientService, private user: UserService) { }

  ngOnInit(): void {
    this.selectedLanguage=localStorage.getItem('lang');
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

}
