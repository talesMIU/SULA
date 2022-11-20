import { Component, OnInit } from '@angular/core';
import { AmbientMaintenance } from 'src/app/models/model';
import { AmbientMaintenanceService } from 'src/app/services/maintenance.service';
import { MatDialog } from '@angular/material/dialog';
import { MainCModalComponent } from './main-c-modal/main-c-modal.component';
import { MainUModalComponent } from './main-u-modal/main-u-modal.component';

@Component({
  selector: 'app-adm-maintenance',
  templateUrl: './adm-maintenance.component.html',
  styleUrls: ['../admin.component.scss']
})

export class AdmMaintenanceComponent implements OnInit {

  displayedColumns: string[] = ['id', 'ambientName', 'isDone','createdOn', 'endDate', 'updatedOn', ];
  dataSource: any;
  checkBoxArray = new Array();
  loading!:boolean;
  constructor(private dialog: MatDialog, private maintenance: AmbientMaintenanceService){ }

  ngOnInit(): void {
    this.loadData();
  }
createMain(){
  this.dialog.open(MainCModalComponent);
}
updateMain(){
  this.dialog.open(MainUModalComponent, {
    data:{
      id:this.checkBoxArray[0],
    }
  });
}
doneMain(){
  this.loading=true;
  this.maintenance.maintenanceAll().then((data) => {
    for (let ob of data) {
      let y = 0;
      for (y = 0; y < this.checkBoxArray.length; y++) {
        if (this.checkBoxArray[y] === ob.id) {
          ob.isDone = true;
          let stringOb = JSON.stringify(ob);
          let jsonOb = JSON.parse(stringOb);
          this.maintenance.maintenanceUpdate(this.checkBoxArray[y], jsonOb).then((data) => { console.log('desativado') });
        }
      }
    }
  }).finally(()=>{setTimeout(()=>{window.location.reload();}, 3000)});
}
loadData() {
  this.maintenance.maintenanceAll().then((data) => {
    this.dataSource = data;
  });
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
}
