import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-failed',
  templateUrl: './share-failed.component.html',
  styleUrls: ['./share-failed.component.scss']
})
export class ShareFailedComponent implements OnInit {

  selectedLanguage!: any;
  constructor() { }

  ngOnInit(): void {
    this.selectedLanguage = localStorage.getItem('lang');
  }

}
