import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateAgendamentoComponent } from 'src/app/components/controler/update-agendamento/update-agendamento.component';
@Component({
  selector: 'app-show-schedule-module',
  templateUrl: './show-schedule-module.component.html',
  styleUrls: ['./show-schedule-module.component.scss']
})
export class ShowScheduleModuleComponent implements OnInit {
  subject!:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog) { }
  isUser!:boolean;
  userType: any;
  ngOnInit(): void {
    this.subject = this.data;
    console.log(this.subject);
    this.userType = sessionStorage.getItem('username');
    console.log(this.userType);
    if(this.userType==='Douglas'){
      this.isUser=true
    }else{this.isUser=false;}
  }
  update(){
    const dialogRef = this.dialog.open(UpdateAgendamentoComponent);
  }
 
}
