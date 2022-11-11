import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AmbientService } from 'src/app/services/ambient.service';

@Component({
  selector: 'app-amb-v-modal',
  templateUrl: './amb-v-modal.component.html',
  styleUrls: ['./amb-v-modal.component.scss']
})
export class AmbVModalComponent implements OnInit {

  viewValues = new Array;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ambient:AmbientService) { }

  ngOnInit(): void {
    let x=0;
    for(x=0; x<this.data.length; x++){
      this.ambient.ambientById(this.data[x]).subscribe((value)=>{
        this.viewValues.push(value);
      });
      console.log(this.viewValues)
    }
  }
}
