import { Component, OnInit, OnDestroy} from '@angular/core';
import { LoginStorageService } from 'src/app/services/storage/login-storage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  isSelected!:boolean;
  navigate: any;
  constructor(private login:LoginStorageService, private router: Router) { }

  ngOnInit(): void { this.navigate="Ambients";
  let log = this.login.getUserRole();
  if(log !== 'ROLE_ADMIN'){
    this.router.navigate(['']);
  } }
  ngOnDestroy(){}
  goTo(value:string){
    this.navigate=value
  }
}
