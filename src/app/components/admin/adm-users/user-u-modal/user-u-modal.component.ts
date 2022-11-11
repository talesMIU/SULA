import { Component, OnInit } from '@angular/core';
import { UserRole } from 'src/app/shared/role';
import { ComboBox } from 'src/app/shared/comboBox';

@Component({
  selector: 'app-user-u-modal',
  templateUrl: './user-u-modal.component.html',
  styleUrls: ['./user-u-modal.component.scss']
})
export class UserUModalComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

  updateUser(){}

}
