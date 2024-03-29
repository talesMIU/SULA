import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AmbCModalComponent } from './amb-c-modal/amb-c-modal.component';
import { AmbientService } from 'src/app/services/ambient.service';
import { Ambient } from 'src/app/models/model';
import { AmbVModalComponent } from './amb-v-modal/amb-v-modal.component';
import { AmbUModalComponent } from './amb-u-modal/amb-u-modal.component';
import {MatPaginator} from '@angular/material/paginator';

import { ShareFailedComponent } from 'src/app/shared/share-failed/share-failed.component';

@Component({
  selector: 'app-adm-ambients',
  templateUrl: './adm-ambients.component.html',
  styleUrls: ['../admin.component.scss']
})

export class AdmAmbientsComponent implements OnInit {

  selectedLanguage!: any; 
  displayedColumns: string[] = ['id', 'name', 'type', 'reference', 'number', 'isActive', 'createdOn', 'updatedOn'];
  dataSource: any;
  searchAmbients: any;
  checkBoxArray = new Array();
  loading!:boolean;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private router: Router, public dialog: MatDialog, private ambient:AmbientService) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.loading=false;
    this.selectedLanguage = localStorage.getItem('lang');
    this.loadData();
  }

  loadData(){
    this.ambient.ambientAll().then((data)=>{
      this.dataSource = data;
    })
  }

  createAmb(): void {
    this.dialog.open(ShareFailedComponent);
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
    this.dialog.open(AmbUModalComponent, {
      data: {
        id: this.checkBoxArray[0],
      }
    });
  }
  deActivateAmb(){
    this.loading=true;
    this.ambient.ambientAll().then((data)=>{
      for (let ob of data) {
        let y = 0;
        for (y = 0; y < this.checkBoxArray.length; y++) {
          if (this.checkBoxArray[y] === ob.id) {
            ob.isActive = false;
            let stringOb = JSON.stringify(ob);
            let jsonOb = JSON.parse(stringOb);
            this.ambient.ambientUpdate(this.checkBoxArray[y], jsonOb).then((data) => { console.log('desativado') }).finally(()=>{setTimeout(()=>{window.location.reload();}, 3000)});
          }
        }
      }
    });    
  }
  viewAmb(){
    this.dialog.open(AmbVModalComponent,{
      data: this.checkBoxArray
    })
  }
}
