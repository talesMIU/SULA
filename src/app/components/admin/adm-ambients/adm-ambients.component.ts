import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AmbCModalComponent } from './amb-c-modal/amb-c-modal.component';
import { AmbientService } from 'src/app/services/ambient.service';
import { Ambient } from 'src/app/models/model';
import { AmbVModalComponent } from './amb-v-modal/amb-v-modal.component';
import { AmbUModalComponent } from './amb-u-modal/amb-u-modal.component';

@Component({
  selector: 'app-adm-ambients',
  templateUrl: './adm-ambients.component.html',
  styleUrls: ['../admin.component.scss']
})

export class AdmAmbientsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'type', 'reference', 'number', 'isActive', 'createdOn', 'updatedOn'];
  dataSource: any;
  searchAmbients: any;
  checkBoxArray = new Array();

  constructor(private router: Router, public dialog: MatDialog, private ambient:AmbientService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.ambient.ambientAll().subscribe((data)=>{
      this.dataSource = data;
    })
  }

  createAmb(): void {
    this.dialog.open(AmbCModalComponent);
  }

  onCheckChange(value: string){
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
  update(){
    this.dialog.open(AmbUModalComponent);
  }
  deActivateAmb(){
    
    this.ambient.ambientAll().subscribe((data)=>{
      for (let ob of data) {
        let y = 0;
        for (y = 0; y < this.checkBoxArray.length; y++) {
          if (this.checkBoxArray[y] === ob.id) {
            ob.isActive = false;
            let stringOb = JSON.stringify(ob);
            let jsonOb = JSON.parse(stringOb);
            console.log(jsonOb);
            this.ambient.ambientUpdate(this.checkBoxArray[y], jsonOb).subscribe((data) => { console.log('desativado') });
          }
        }

      }
    })
    
  }
  viewAmb(){
    this.dialog.open(AmbVModalComponent,{
      data: this.checkBoxArray
    })
  }
}
