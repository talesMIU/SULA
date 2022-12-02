import { Component, OnInit, Inject } from '@angular/core';
import { AmbientService } from 'src/app/services/ambient.service';
import { ComboBox } from 'src/app/shared/comboBox';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StatusActive } from 'src/app/shared/statusActive';

@Component({
  selector: 'app-amb-u-modal',
  templateUrl: './amb-u-modal.component.html',
  styleUrls: ['./amb-u-modal.component.scss']
})
export class AmbUModalComponent implements OnInit {

  ambAval: ComboBox[] = [
    { value: 'MORNING', viewValue: 'Morning' },
    { value: 'EVENING', viewValue: 'Evening' },
    { value: 'NOCTURNE', viewValue: 'Nocturne' },
  ];
  ambType: ComboBox[] = [
    { value: 'LABORATORY', viewValue: 'Laboratory' },
    { value: 'CLASSROOM', viewValue: 'Classroom' },
    { value: 'LIBRARY', viewValue: 'Library' },
  ];
  ambChar: ComboBox[] = [
    { value: 'WIFI', viewValue: 'Wi-Fi' },
    { value: 'PROJECTOR', viewValue: 'Projector' },
    { value: 'DATACENTER', viewValue: 'Datacenter' },
  ];
  ambAvalPT: ComboBox[] = [
    { value: 'MORNING', viewValue: 'Manhã' },
    { value: 'EVENING', viewValue: 'Tarde' },
    { value: 'NOCTURNE', viewValue: 'Noite' },
  ];
  ambTypePT: ComboBox[] = [
    { value: 'LABORATORY', viewValue: 'Laboratório' },
    { value: 'CLASSROOM', viewValue: 'Sala' },
    { value: 'LIBRARY', viewValue: 'Biblioteca' },
  ];
  ambCharPT: ComboBox[] = [
    { value: 'WIFI', viewValue: 'Wi-Fi' },
    { value: 'PROJECTOR', viewValue: 'Projetor' },
    { value: 'DATACENTER', viewValue: 'Datacenter' },
  ];

  aType: any;
  aChar = new Array();
  aAval = new Array();
  ambientName!: string;
  ambientReference!: string;
  ambientNumber!: number;
  oldName: any;
  ambId: any;
  ambStat!: boolean;
  ambientStatus: StatusActive[] = [
    { value: true, viewValue: 'Activate' },
    { value: false, viewValue: 'Deactivate' },];

  ambientStatusPT: StatusActive[] = [
    { value: true, viewValue: 'Activate' },
    { value: false, viewValue: 'Deactivate' },];
    
  loading!: boolean;
  selectedLanguage!: any;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ambient: AmbientService) { }

  ngOnInit(): void {
    this.selectedLanguage = localStorage.getItem('lang');
    this.loading = false;
    this.ambId = Object.values(this.data)[0];
    this.ambient.ambientById(this.ambId).then((old: any) => { this.oldName = old });
  }
  onCheckChar(data: string) { }
  onCheckAval(data: string) { }
  updateAmb() {
    this.loading = true;
    this.ambient.ambientById(this.ambId).then((result: any) => {
      if (this.ambientName) {
        result.name = this.ambientName;
      }
      if (this.aType) {
        result.type = this.aType;
      }
      if (this.ambientReference) {
        result.reference = this.ambientReference;
      }
      if (this.ambientNumber) {
        result.number = this.ambientNumber;
      }
      if (this.aChar) {
        result.characteristics = this.aChar;
      }
      if (this.aAval) {
        result.availabilities = this.aAval;
      }
      if (this.ambStat) {
        result.isActive = this.ambStat;
      }
      this.ambient.ambientUpdate(this.ambId, result).then((data: any) => { console.log(data) })
    }).finally(() => { setTimeout(() => { window.location.reload(); }, 3000) });
  }
}
