import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ambient } from 'src/app/models/model';
import { AmbientService } from 'src/app/services/ambient.service';

import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-main-c-modal',
  templateUrl: './main-c-modal.component.html',
  styleUrls: ['./main-c-modal.component.scss']
})
export class MainCModalComponent implements OnInit {

  selectedAmbient: any;
  ambientArray = new Array();

  constructor(private ambientService: AmbientService) { }

  ngOnInit(): void {
    this.ambientService.ambientAll().subscribe((data:any)=>{
      this.ambientArray=data;
    })
  }

newMaintenance(){}
}
