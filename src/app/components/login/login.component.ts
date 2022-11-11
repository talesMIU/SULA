import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserToken, UserValid, UserLogin } from 'src/app/models/model';
import { HttpClient } from '@angular/common/http';
import { LoginStorageService } from 'src/app/services/storage/login-storage-service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  userN: string = "";
  pass: string = "";
  dialog: any;
  newUser: UserValid[] = [];
  formUserLogin!: FormGroup;
  sessionLog: UserToken = {
    //  success: false,
    token: '',
    //refreshToken: '',
    //role: 'user'
  }

  constructor(private router: Router,
     private userService: UserService,
     private http: HttpClient,
     private loginStorageService: LoginStorageService) { }
     
  createForm(userLogin: UserLogin) {
    this.formUserLogin = new FormGroup({
      username: new FormControl(userLogin.username),
      password: new FormControl(userLogin.password)
    });

  }
  ngOnInit() {
    this.createForm(new UserLogin());
  }
  ngOnDestroy() { }

  goBack() {
    this.router.navigate(['']);
  }

  goLog() {
    const formData = new FormData();
    formData.append('username', this.formUserLogin.get('username')?.value);
    formData.append('password', this.formUserLogin.get('password')?.value);
    this.userService.getLogin(formData).subscribe((data: any) => {
      let array = [];
      if (data) {
        array.push(data);
        this.sessionLog.token = JSON.stringify(Object.values(data)[0]);
        this.loginStorageService.saveUserLogin(data);
        this.userService.userAll().subscribe((user: any) => {
          for (let us of user) {
            if (us.username === this.userN) {
              for(let role of us.roles){
                if(role.name==='ROLE_ADMIN'){
                  console.log('if funfa')
                  this.router.navigate(['admin']);
                }else{
                  this.router.navigate(['control']);
                }
              }
            }
          }
        })
      }
    });
  }
}
