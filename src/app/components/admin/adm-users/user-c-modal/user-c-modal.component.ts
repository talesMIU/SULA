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
  roles: UserRole[]=[{
    id:'', name:""
  }];
  userRoles: ComboBox[] = [
    { value: 'ROLE_ADMIN', viewValue: 'Administrator' },
    { value: 'ROLE_USER', viewValue: 'User' },
  ];

  constructor(private user:UserService) { }

  ngOnInit(): void {
  }
  newUser() {
    this.roles[0].name=this.userRole;
    let objString = JSON.stringify({ email: this.userEmail, name: this.userName, username: this.userUsName, password: this.userPassword, roles: this.roles });
    let objJson = JSON.parse(objString);
    console.log(objJson);
    this.user.userCreate(objJson).subscribe((data) => { console.log(data) });
  }

}
