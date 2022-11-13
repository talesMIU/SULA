import { Component, OnInit, Inject } from '@angular/core';
import { AmbientService } from 'src/app/services/ambient.service';
import { ComboBox } from 'src/app/shared/comboBox';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StatusActive } from 'src/app/shared/statusActive';

@Component({
  selector: 'app-amb-u-modal',
  templateUrl: './amb-u-modal.component.html',
  styleUrls: ['./amb-u-modal.component.scss']
})
export class AmbUModalComponent implements OnInit {

  ambAval: ComboBox[]=[
    {value: 'MORNING', viewValue:'Morning'},
    {value: 'EVENING', viewValue:'Evening'},
    {value: 'NOCTURNE', viewValue:'Nocturne'},
  ];
  ambType: ComboBox[]=[
    { value: 'LABORATORY', viewValue: 'Laboratory'},
    { value: 'CLASSROOM', viewValue: 'Classroom'},
    { value: 'LIBRARY', viewValue: 'Library'},
  ];
  ambChar: ComboBox[]=[
    { value: 'WIFI', viewValue: 'Wi-Fi'},
    { value: 'PROJECTOR', viewValue: 'Projector'},
    { value: 'DATACENTER', viewValue: 'Datacenter'},
  ];
  aType:any;
  aChar= new Array();
  aAval= new Array();
  ambientName!:string;
  ambientReference!:string;
  ambientNumber!: number;
  oldName:any;
  ambId:any;
  ambStat:any;
  ambientStatus: StatusActive[] = [
    { value: true, viewValue: 'Activate' },
    { value: false, viewValue: 'Deactivate' },];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ambient: AmbientService ) { }

  ngOnInit(): void {
    this.ambId = Object.values(this.data)[0];
    this.ambient.ambientById(this.ambId).subscribe((old:any)=>{this.oldName = old});
  }
onCheckChar(data:string){}
onCheckAval(data:string){}
updateAmb(){
  
}
}
