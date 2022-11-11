import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubjectService } from 'src/app/services/subject.service';
import { ComboBox } from 'src/app/shared/comboBox';
import { SubjectName } from 'src/app/models/model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sub-c-modal',
  templateUrl: './sub-c-modal.component.html',
  styleUrls: ['./sub-c-modal.component.scss']
})

export class SubCModalComponent implements OnInit {

  subName: string="";
  subSem: any;
  subSemester: ComboBox[] = [
    { value: 'FIRST', viewValue: '1°' },
    { value: 'SECOND', viewValue: '2°' },
    { value: 'THIRD', viewValue: '3°' },
    { value: 'FOURTH', viewValue: '4°' },
    { value: 'FIFTH', viewValue: '5°' },
    { value: 'SIXTH', viewValue: '6°' },];

  constructor(public dialogRef: MatDialogRef<SubCModalComponent>,    
    public subject: SubjectService) { }

  ngOnInit(): void {}

  newSub() {
    let objString = JSON.stringify({name: this.subName , semester: this.subSem});
    let objJson = JSON.parse(objString);
    console.log(objJson);
    this.subject.subjectCreate(objJson).subscribe((data)=>{console.log(data)});
  }
}
