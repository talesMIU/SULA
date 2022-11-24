import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-show-schedule-module',
  templateUrl: './show-schedule-module.component.html',
  styleUrls: ['./show-schedule-module.component.scss']
})
export class ShowScheduleModuleComponent implements OnInit {
  subject!:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.subject = this.data;
    console.log(this.subject);
  }

}
