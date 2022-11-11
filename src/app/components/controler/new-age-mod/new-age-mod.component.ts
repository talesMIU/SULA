import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-age-mod',
  templateUrl: './new-age-mod.component.html',
  styleUrls: ['./new-age-mod.component.scss']
})
export class NewAgeModComponent implements OnInit {

  tipoAgendamento: any;
  ages: string[] = ['Único', 'Recorrente'];

  constructor() { }

  ngOnInit(): void {
  }

}
