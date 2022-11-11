import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubjectService } from 'src/app/services/subject.service';
import { ComboBox } from 'src/app/shared/comboBox';
import { SubjectName } from 'src/app/models/model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { StatusActive } from 'src/app/shared/statusActive';

@Component({
  selector: 'app-sub-u-modal',
  templateUrl: './sub-u-modal.component.html',
  styleUrls: ['./sub-u-modal.component.scss']
})
export class SubUModalComponent implements OnInit {

  subId: any;
  disable = true;
  subName: any;
  subSem: any;
  subStat: any;
  subSemester: ComboBox[] = [
    { value: 'FIRST', viewValue: '1°' },
    { value: 'SECOND', viewValue: '2°' },
    { value: 'THIRD', viewValue: '3°' },
    { value: 'FOURTH', viewValue: '4°' },
    { value: 'FIFTH', viewValue: '5°' },
    { value: 'SIXTH', viewValue: '6°' },];
    subStatus: StatusActive[] = [
      { value: true, viewValue: 'Activate' },
      { value: false, viewValue: 'Deactivate' },];
    oldName:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public subject: SubjectService) { }

  ngOnInit() {    
    this.subId = Object.values(this.data)[0];
    this.subject.subjectById(this.subId).subscribe((old:any)=>{this.oldName = old});
  }
  updateSub() {
      this.subject.subjectById(this.subId).subscribe((values: any) => {
       if(this.subName){
        values.name=this.subName;
       }
       if(this.subSem){
        values.semester=this.subSem;
       }
       if(this.subStat){
        values.isActive=this.subStat;
       }
       this.subject.subjectUpdate(this.subId, values).subscribe((data:any)=>{console.log(data)});
    }

    );
  }
}
