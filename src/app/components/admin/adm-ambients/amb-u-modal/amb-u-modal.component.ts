import { Component, OnInit } from '@angular/core';
import { AmbientService } from 'src/app/services/ambient.service';
import { ComboBox } from 'src/app/shared/comboBox';

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

  constructor(private ambient: AmbientService ) { }

  ngOnInit(): void {
  }
onCheckChar(data:string){}
onCheckAval(data:string){}
updateAmb(){
  
}
}
