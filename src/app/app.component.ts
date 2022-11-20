import {Component, Inject} from '@angular/core';
import {MAT_NATIVE_DATE_FORMATS} from '@angular/material/core/datetime';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sula';
}
