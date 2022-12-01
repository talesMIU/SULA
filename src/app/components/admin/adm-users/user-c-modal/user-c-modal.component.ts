import { Component, OnInit } from '@angular/core';
import { ComboBox } from 'src/app/shared/comboBox';
import { UserService } from 'src/app/services/user.service';
import { UserRole } from 'src/app/shared/role';

@Component({
  selector: 'app-user-c-modal',
  templateUrl: './user-c-modal.component.html',
  styleUrls: ['./user-c-modal.component.scss']
})
export class UserCModalComponent implements OnInit {

  userName!: string;
  userEmail!: string;
  userUsName!: string;
  userPassword!: string;
  userRole: any;
  objJson:any;
  roles: UserRole[]=[{
    id:'', name:""
  }];
  userRoles: ComboBox[] = [
    { value: 'ROLE_ADMIN', viewValue: 'Administrator' },
    { value: 'ROLE_USER', viewValue: 'User' },
  ];
  loading!:boolean;
  selectedLanguage!:any;
  

  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.selectedLanguage = localStorage.getItem('lang');
    this.loading=false;
  }
  newUser() {
    this.loading=true;
      if(this.userRole==='ROLE_ADMIN'){
        this.roles[0].id='c47a8439-65e0-11ed-ad0d-0a33a65a227b';
        this.roles[0].name=this.userRole;
        let objString = JSON.stringify({ email: this.userEmail, name: this.userName, username: this.userUsName, password: this.userPassword, roles: this.roles });
       this.objJson = JSON.parse(objString);
      }else if(this.userRole==='ROLE_USER'){
        this.roles[0].id='c583d68e-65e0-11ed-ad0d-0a33a65a227b';
        this.roles[0].name=this.userRole;
        let objString = JSON.stringify({ email: this.userEmail, name: this.userName, username: this.userUsName, password: this.userPassword, roles: this.roles });
        this.objJson = JSON.parse(objString);
      }
      this.user.userCreate(this.objJson).then((data) => { console.log(data) }).finally(()=>{setTimeout(()=>{window.location.reload();}, 3000)});    
  }

}
