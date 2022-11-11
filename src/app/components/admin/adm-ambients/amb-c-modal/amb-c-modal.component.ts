import { Component, OnInit } from '@angular/core';
import { AmbientService } from 'src/app/services/ambient.service';
import { ComboBox } from 'src/app/shared/comboBox';

@Component({
  selector: 'app-amb-c-modal',
  templateUrl: './amb-c-modal.component.html',
  styleUrls: ['./amb-c-modal.component.scss']
})
export class AmbCModalComponent implements OnInit {

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
  onCheckChar(data:string){
    if (this.aChar.length === 0) {
      this.aChar.push(data);
    } else {
      let x = 0;
      let i = null;
      for (x = 0; x < this.aChar.length; x++) {
        if (this.aChar[x] === data) {
          i = x;
        }
      }
      if (i != null) {
        this.aChar.splice(i,1);
      } else {
        this.aChar.push(data);
      }
    }
    console.log(this.aChar);
  }
  onCheckAval(data:string){
    if (this.aAval.length === 0) {
      this.aAval.push(data);
    } else {
      let x = 0;
      let i = null;
      for (x = 0; x < this.aAval.length; x++) {
        if (this.aAval[x] === data) {
          i = x;
        }
      }
      if (i != null) {
        this.aAval.splice(i,1);
      } else {
        this.aAval.push(data);
      }
    }
    console.log(this.aAval);
  }
  newAmb(){
    let objString = JSON.stringify({availabilities:this.aAval , characteristics: this.aChar , name: this.ambientName , type: this.aType , reference:this.ambientReference , number:this.ambientNumber});
    let objJson = JSON.parse(objString)
    console.log(objJson);
    this.ambient.ambientCreate(objJson).subscribe((data)=>{console.log(data)});
  }
}
