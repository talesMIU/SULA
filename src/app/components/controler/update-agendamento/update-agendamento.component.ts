import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-agendamento',
  templateUrl: './update-agendamento.component.html',
  styleUrls: ['./update-agendamento.component.scss']
})
export class UpdateAgendamentoComponent implements OnInit {

  update: any;
  ups: string[] = ['Update', 'Cancel Schedule'];
  atu = 'Update';
  can = 'Cancel Schedule';
  tipoAgendamento: any;
  ages: string[] = ['Once', 'Recurrent'];
  constructor() { }

  ngOnInit(): void {
  }

}
