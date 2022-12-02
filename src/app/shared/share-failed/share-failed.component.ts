import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-share-failed',
  templateUrl: './share-failed.component.html',
  styleUrls: ['./share-failed.component.scss']
})
export class ShareFailedComponent implements OnInit {

  selectedLanguage!: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.selectedLanguage = localStorage.getItem('lang');
  }

}
