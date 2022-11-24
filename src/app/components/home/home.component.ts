import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from 'src/app/models/model';
import { ScheduleService} from 'src/app/services/schedule.service';
import { ShowScheduleModuleComponent } from'src/app/shared/show-schedule-module/show-schedule-module.component'

import { MatDialog } from '@angular/material/dialog';
interface Curso {
  value: string;
  viewValue: string;
}
interface Semestre {
  value: string;
  viewValue: string;
}
interface Periodo {
  value: string;
  viewValue: string;
}
interface Hora {
  value: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: any;
  tipoData:any;
  selectedCurso: any;
  dia: any;
  arrayDatas = new Array();
  sem = 'Week';
  men = 'Month';
  cursos: Curso[] = [
    {value:'ads', viewValue:'Análise e Desenvolvimento de Sistemas'},
    {value:'dsm', viewValue:'Desenvolvimento de Software Multiplataforma'},
    {value:'gem', viewValue:'Gestão Empresarial'},
    {value:'log', viewValue:'Logística'}
  ];
  selectedSemestre: any;
  semestres: Semestre[] = [
    {value:'1', viewValue:'1'},
    {value:'2', viewValue:'2'},
    {value:'3', viewValue:'3'},
    {value:'4', viewValue:'4'},
    {value:'5', viewValue:'5'},
    {value:'6', viewValue:'6'},
  ];
  selectedPeriodo: any;
  periodos: Periodo[] = [
    {value:'mat', viewValue:'Morning'},
    {value:'ves', viewValue:'Evening'},
    {value:'not', viewValue:'Night'}
  ];
  day = new Date();
  horas: Hora[] = [
    {value:'07:00: Lab_5-MicroSistemas'},{value:'07:30: Lab_5-MicroSistemas'},{value:'08:00: Lab_5-MicroSistemas'},{value:'08:30: Lab_5-MicroSistemas'},{value:'09:00: ambients_1-Gestão_Empresarial'},{value:'09:30 ambients_1-Gestão_Empresarial'},{value:'10:00 ambients_1-Gestão_Empresarial'},{value:'10:30 ambients_1-Gestão_Empresarial'},{value:'11:00 ambients_1-Gestão_Empresarial'},{value:'11:30 ambients_1-Gestão_Empresarial'},    
  ]


  dates: string[] = ['Week', 'Month'];

  constructor(  private router: Router, public scheduleService: ScheduleService,public dialog: MatDialog) {};

  ngOnInit(): void {
    this.scheduleService.scheduleAll().then((data:any)=>{
      for(let dat of data){
        this.arrayDatas.push(dat.startDate);
      }
      console.log(this.arrayDatas);
    });
  }
  ngOnDestroy(){}

  goLogin(){
    this.router.navigate(['login']);
  }

  openModalDia(res:string){
    res='"'+res+'"';
    this.scheduleService.scheduleAll().then((data:any)=>{      
      for(let dat of data){
        let diaJSON = JSON.stringify(dat.startDate);        
        console.log(res);
        if(diaJSON===res){
         this.dialog.open(ShowScheduleModuleComponent,{
          data: dat,
         })
        }
      }
    });
  }
}
