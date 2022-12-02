import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ambient, AmbientMaintenance } from 'src/app/models/model';
import { AmbientService } from 'src/app/services/ambient.service';
import { AmbientMaintenanceService } from 'src/app/services/maintenance.service';

@Component({
  selector: 'app-main-c-modal',
  templateUrl: './main-c-modal.component.html',
  styleUrls: ['./main-c-modal.component.scss']
})
export class MainCModalComponent implements OnInit {

  selectedAmbient!: any;
  ambientArray = new Array();
  startDate = new Date();
  endDate = new Date();
  loading!:boolean
  selectedLanguage!:any;
  
  constructor(private ambientService: AmbientService, private maintenanceService: AmbientMaintenanceService) { }

  ngOnInit(): void {
    this.loading=false;
    this.selectedLanguage = localStorage.getItem('lang');
    this.ambientService.ambientAll().then((data:any)=>{
      this.ambientArray=data;
    })
  }

newMaintenance(){
  this.selectedLanguage = localStorage.getItem('lang');
  this.loading=true;
  const startDateJSON = JSON.stringify(this.startDate).split('"');
  const endDateJSON = JSON.stringify(this.endDate).split('"');
  let objString = JSON.stringify({ambient: this.selectedAmbient, startDate: startDateJSON[1], endDate: endDateJSON[1], isDone: false});
  let objJson = JSON.parse(objString);
  console.log(objJson);
  this.maintenanceService.maintenanceCreate(objJson).then((data)=>{console.log(data)}).finally(()=>{setTimeout(()=>{window.location.reload();}, 3000)});
}
}
