import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UpdateAgendamentoComponent } from './update-agendamento/update-agendamento.component';
import { NewAgeModComponent } from './new-age-mod/new-age-mod.component';
import { LoginStorageService } from '../../services/storage/login-storage-service'
import { UserService } from 'src/app/services/user.service';
import { ScheduleService } from 'src/app/services/schedule.service';

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
  selector: 'app-controler',
  templateUrl: './controler.component.html',
  styleUrls: ['./controler.component.scss']
})
export class ControlerComponent implements OnInit {

  loading!:boolean
  tipoData: any;
  selectedCurso: any;
  sem = 'Week';
  men = 'Month';
  userName!: any;
  userId!: any;
  userObj: any;
  mySchedules = new Array();
  cancel!:boolean;
  cursos: Curso[] = [
    { value: 'ads', viewValue: 'Análise e Desenvolvimento de Sistemas' },
    { value: 'dsm', viewValue: 'Desenvolvimento de Software Multiplataforma' },
    { value: 'gem', viewValue: 'Gestão Empresarial' },
    { value: 'log', viewValue: 'Logística' }
  ];
  selectedSemestre: any;
  semestres: Semestre[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
    { value: '6', viewValue: '6' },
  ];
  selectedPeriodo: any;
  periodos: Periodo[] = [
    { value: 'mat', viewValue: 'Matutino' },
    { value: 'ves', viewValue: 'Vespertino' },
    { value: 'not', viewValue: 'Noturno' }
  ];
  horasegs: Hora[] = [
    { value: '07:00: Lab_5-MicroSistemas' }, { value: '07:30: Lab_5-MicroSistemas' },
    { value: '08:00: Lab_5-MicroSistemas' }, { value: '08:30: Lab_5-MicroSistemas' }
  ]
  horaquas: Hora[] = [
    { value: '09:00 SALA_04-HTML e CSS' }, { value: '09:30 SALA_04-HTML e CSS' },
    { value: '10:00 SALA_04-HTML e CSS' }, { value: '10:30 SALA_04-HTML e CSS' },
    { value: '11:00 SALA_04-HTML e CSS' }, { value: '11:30 SALA_04-HTML e CSS' }
  ]
  horasexs: Hora[] = [
    { value: '09:00: SALA_06-IA' }, { value: '09:30 SALA_06-IA' },
    { value: '10:00 SALA_06-IA' }, { value: '10:30 SALA_06-IA' },
    { value: '11:00 SALA_06-IA' }, { value: '11:30 SALA_06-IA' }
  ]


  dates: string[] = ['Week', 'Month'];
  constructor(private router: Router, public dialog: MatDialog, private login: LoginStorageService, private user: UserService, private schedule: ScheduleService) { }

  ngOnInit(): void {
    this.loading=false;
    let log = this.login.getUserRole();
    if (log !== 'ROLE_USER') {
      this.router.navigate(['']);
    }
    this.cancel=false;
    this.userName = sessionStorage.getItem('username');
    this.tipoData = 'Week';
    this.userId = sessionStorage.getItem('uId');
    this.getMySchedule();
  }

  getMySchedule() {
    this.user.userById(this.userId).subscribe((data) => {
      const dataJSON = JSON.stringify(data);
      this.schedule.scheduleAll().then((result: any) => {
        for (let res of result) {
          let resJSON = JSON.stringify(res.user);
          if (dataJSON === resJSON) {
            this.mySchedules.push(res);
          }
        }
      });
    });
  }


  goLogin() {
    this.router.navigate(['login']);
  }
  create() { }
  update() { }
  delet() { }
  openModal() {
    const dialogRef = this.dialog.open(UpdateAgendamentoComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.cancel=result;
      this.loading=result;
      setTimeout(()=>{this.loading=false;}, 6000)
    });
  }
  newAgeMod() {
    const dialogRef = this.dialog.open(NewAgeModComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

    });
  }
  openModalDia(){
    
  }
}
