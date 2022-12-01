import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-u-modal',
  templateUrl: './main-u-modal.component.html',
  styleUrls: ['./main-u-modal.component.scss']
})
export class MainUModalComponent implements OnInit {
  selectedLanguage!:any;
  
  constructor() { }

  ngOnInit(): void {
    this.selectedLanguage = localStorage.getItem('lang');
  }
  updateMaintenance(){}
}
