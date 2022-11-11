import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  navigate: any;
  constructor() { }

  ngOnInit(): void { this.navigate="Ambients"; }
  ngOnDestroy(){}
  goTo(value:string){
    this.navigate=value
  }
}
