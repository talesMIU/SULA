import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComboBox } from 'src/app/shared/comboBox';


@Component({
  selector: 'app-share-settings',
  templateUrl: './share-settings.component.html',
  styleUrls: ['./share-settings.component.scss']
})
export class ShareSettingsComponent implements OnInit {

  selectedLanguage!:any;
  languagesEN: ComboBox[]=[
    {value: 'ENGLISH', viewValue:'English'},
    {value: 'PORTUGUESE', viewValue:'Portuguese'},
  ];
  languagesPT: ComboBox[]=[
    {value: 'ENGLISH', viewValue:'Inglês'},
    {value: 'PORTUGUESE', viewValue:'Português'},
  ];
  constructor() { }

  ngOnInit(): void {
    this.selectedLanguage=localStorage.getItem('lang');
    console.log(localStorage.getItem('lang'));
  }

  setLanguage(){
    localStorage.setItem('lang', this.selectedLanguage);
    window.location.reload();
  }

}
