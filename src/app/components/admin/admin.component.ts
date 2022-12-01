import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginStorageService } from 'src/app/services/storage/login-storage-service';
import { Router } from '@angular/router';
import { ShareSettingsComponent } from 'src/app/shared/share-settings/share-settings.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  selectedLanguage!: any; 
  isSelected!: boolean;
  navigate: any;
  headerName: any;
  constructor(private login: LoginStorageService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.navigate = sessionStorage.getItem('adminPage');
    this.selectedLanguage = localStorage.getItem('lang');
    if (this.selectedLanguage === 'ENGLISH') {
      switch (this.navigate) {
        case 'Ambiente':
          this.headerName = 'Ambients';
          break;
        case 'Curso':
          this.headerName = 'Course';
          break;
        case 'Manutenção':
          this.headerName = 'Maintenance';
          break;
        case 'Matéria':
          this.headerName = 'Subject';
          break;
        case 'Usuário':
          this.headerName = 'User';
          break;
        default:
          this.headerName = this.navigate;
          break;
      }
    } else {
      switch (this.navigate) {
        case 'Ambients':
          this.headerName = 'Ambiente';
          break;
        case 'Course':
          this.headerName = 'Curso';
          break;
        case 'Maintenance':
          this.headerName = 'Manutenção';
          break;
        case 'Subject':
          this.headerName = 'Matéria';
          break;
        case 'User':
          this.headerName = 'Usuário';
          break;
        default:
          this.headerName = this.navigate;
          break;
      }
    }
    //let log = this.login.getUserRole();
    //if(log !== 'ROLE_ADMIN'){
    //  this.router.navigate(['']);
    //}
  }
  ngOnDestroy() { }
  goTo(value: string) {
    sessionStorage.setItem('adminPage', value);
    this.navigate = sessionStorage.getItem('adminPage');
    this.headerName = this.navigate;
  }
  goSetting() {
    this.dialog.open(ShareSettingsComponent);
  }
}
