import { Component, OnInit, Inject } from '@angular/core';
import { UserRole } from 'src/app/shared/role';
import { ComboBox } from 'src/app/shared/comboBox';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StatusActive } from 'src/app/shared/statusActive';
import { UserService } from 'src/app/services/user.service';

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
  oldName:any;
  userId:any;
  userStat:any;
  userStatus: StatusActive[] = [
    { value: true, viewValue: 'Activate' },
    { value: false, viewValue: 'Deactivate' },];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private us: UserService) { }

  ngOnInit(): void {
    this.userId = Object.values(this.data)[0];
    this.us.userById(this.userId).subscribe((old:any)=>{this.oldName = old});
  }

  updateUser(){}

}
