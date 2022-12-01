import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { UserCModalComponent } from './user-c-modal/user-c-modal.component';
import { UserUModalComponent } from './user-u-modal/user-u-modal.component';

export interface Professor {
  id: number;
  nome: string;
  ativo: string;
  curso: string;
}
const ELEMENT_DATA: Professor[] = [
  { id: 1, nome: 'Ana', ativo: 'Sim', curso: 'ADS' },
  { id: 2, nome: 'Carlos', ativo: 'Sim', curso: 'GE' },
  { id: 3, nome: 'Eduardo', ativo: 'Não', curso: 'ADS' },
  { id: 4, nome: 'Flavia', ativo: 'Não', curso: 'GE' },
  { id: 5, nome: 'Hélio', ativo: 'Não', curso: 'ADS'},
  { id: 6, nome: 'Joelma', ativo: 'Sim', curso: 'SM' },
  { id: 7, nome: 'Karine', ativo: 'Não', curso: 'SM' },
  { id: 8, nome: 'Lucas', ativo: 'Não', curso: 'GE' },
  { id: 9, nome: 'Tulio', ativo: 'Não', curso: 'LOG' },
  { id: 10, nome: 'Wagner', ativo: 'Não', curso: 'LOG' },
];

@Component({
  selector: 'app-adm-users',
  templateUrl: './adm-users.component.html',
  styleUrls: ['../admin.component.scss']
})

export class AdmUsersComponent implements OnInit {

  selectedLanguage!:any;
  displayedColumns: string[] = ['email', 'name', 'role', 'isActive', 'createdOn', 'updatedOn'];
  dataSource: any;
  searchambients: any;
  checkBoxArray= new Array;
  loading!:boolean;

  constructor(private dialog: MatDialog, private user: UserService) { }

  ngOnInit(): void {
    this.loading=false;
    this.selectedLanguage=localStorage.getItem('lang');
    this.user.userAll().then((data:any)=>{
      this.dataSource = data;
    });
  }
  createUser(){
    this.dialog.open(UserCModalComponent);
  }
  updateUser(){
    this.dialog.open(UserUModalComponent, {
      data:{
        id: this.checkBoxArray[0],
      },
    });
  }
  deactivateUser(){
    this.loading=true;
    this.user.userAll().then((data)=>{
      for (let ob of data) {
        let y = 0;
        for (y = 0; y < this.checkBoxArray.length; y++) {
          if (this.checkBoxArray[y] === ob.id) {
            ob.isActive = false;
            let stringOb = JSON.stringify(ob);
            let jsonOb = JSON.parse(stringOb);
            console.log(jsonOb);
           this.user.userUpdate(this.checkBoxArray[y], jsonOb).then((data) => { console.log('desativado') });
          }
        }
      }
    })
  }
  onCheckChange(value: string) {
    if (this.checkBoxArray.length === 0) {
      this.checkBoxArray.push(value);
    } else {
      let x = 0;
      let i = null;
      for (x = 0; x < this.checkBoxArray.length; x++) {
        if (this.checkBoxArray[x] === value) {
          i = x;
        }
      }
      if (i != null) {
        this.checkBoxArray.splice(i,1);
      } else {
        this.checkBoxArray.push(value);
      }
    }
  }
}
