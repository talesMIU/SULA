import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubCModalComponent } from './sub-c-modal/sub-c-modal.component';
import { SubUModalComponent } from './sub-u-modal/sub-u-modal.component';
import { SubjectService } from 'src/app/services/subject.service';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { CouAModalComponent } from './cou-a-modal/cou-a-modal.component';

@Component({
  selector: 'app-adm-subject',
  templateUrl: './adm-subject.component.html',
  styleUrls: ['../admin.component.scss']
})
export class AdmSubjectComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'semester', 'isActive', 'createdOn', 'updatedOn'];
  dataSource: any;
  searchSubject: any;
  checkBoxArray = new Array();

  constructor(private dialog: MatDialog, private subject: SubjectService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.subject.subjectAll().subscribe((data) => {
      this.dataSource = data
    });
  }
  createSub(): void {
    this.dialog.open(SubCModalComponent);
  }

  onCheckChange(value: string) {
    if (this.checkBoxArray.length === 0) {
      this.checkBoxArray.push(value);
    } else {
      let x = 0;
      let i = null;
      for (x = 0; x < this.checkBoxArray.length; x++) {
        if (this.checkBoxArray[x] === value) {
          i = x;
        }
      }
      if (i != null) {
        this.checkBoxArray.splice(i,1);
      } else {
        this.checkBoxArray.push(value);
      }
    }
  }
  addCourse() {
    this.dialog.open(CouAModalComponent, {
      data: {
        id: this.checkBoxArray,
      },
    });
   }
  updateSub() {
    this.dialog.open(SubUModalComponent, {
      data: {
        id: this.checkBoxArray[0],
      },
    });
   }

  deleteSub() {
    this.subject.subjectAll().subscribe((data) => {
      for (let ob of data) {
        let y = 0;
        for (y = 0; y < this.checkBoxArray.length; y++) {
          if (this.checkBoxArray[y] === ob.id) {
            ob.isActive = false;
            let stringOb = JSON.stringify(ob);
            let jsonOb = JSON.parse(stringOb);
            console.log(jsonOb);
            this.subject.subjectUpdate(this.checkBoxArray[y], jsonOb).subscribe((data) => { console.log('desativado') });
          }
        }
      }
    });

  }


}
