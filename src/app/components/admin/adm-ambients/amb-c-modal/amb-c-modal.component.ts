import { Component, OnInit } from '@angular/core';
import { AmbientService } from 'src/app/services/ambient.service';
import { ComboBox } from 'src/app/shared/comboBox';
import { ShareFailedComponent } from 'src/app/shared/share-failed/share-failed.component';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from "rxjs/operators";

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

  ambAvalPT: ComboBox[]=[
    {value: 'MORNING', viewValue:'Manhã'},
    {value: 'EVENING', viewValue:'Tarde'},
    {value: 'NOCTURNE', viewValue:'Noite'},
  ];
  ambTypePT: ComboBox[]=[
    { value: 'LABORATORY', viewValue: 'Laboratório'},
    { value: 'CLASSROOM', viewValue: 'Sala'},
    { value: 'LIBRARY', viewValue: 'Biblioteca'},
  ];
  ambCharPT: ComboBox[]=[
    { value: 'WIFI', viewValue: 'Wi-Fi'},
    { value: 'PROJECTOR', viewValue: 'Projetor'},
    { value: 'DATACENTER', viewValue: 'Datacenter'},
  ];

  aType:any;
  aChar= new Array();
  aAval= new Array();
  ambientName!:string;
  ambientReference!:string;
  ambientNumber!: number;
  loading!:boolean;
  selectedLanguage!:any;
  

  constructor(private ambient: AmbientService, public dialog: MatDialog ) { }

  ngOnInit(): void {this.loading=false;this.selectedLanguage = localStorage.getItem('lang');  }
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
    this.loading=true;    
      let objString = JSON.stringify({availabilities:this.aAval , characteristics: this.aChar , name: this.ambientName , type: this.aType , reference:this.ambientReference , number:this.ambientNumber});
      let objJson = JSON.parse(objString);
      this.ambient.ambientCreate(objJson).then((data)=>{console.log(data)}).finally(()=>{setTimeout(()=>{window.location.reload();}, 3000)});
  }
}
