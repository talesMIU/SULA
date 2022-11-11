import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ControlerComponent } from './components/controler/controler.component';
import { LoginComponent } from './components/login/login.component';
import { AmbCModalComponent } from './components/admin/adm-ambients/amb-c-modal/amb-c-modal.component';
import { AdmAmbientsComponent } from './components/admin/adm-ambients/adm-ambients.component';
import { AdmUsersComponent } from './components/admin/adm-users/adm-users.component';
import { AdmCourseComponent } from './components/admin/adm-course/adm-course.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TonkenInterceptor } from './interceptors/token-interceptor';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule} from '@angular/material/table';
import { UpdateAgendamentoComponent } from './components/controler/update-agendamento/update-agendamento.component';
import { NewAgeModComponent } from './components/controler/new-age-mod/new-age-mod.component';
import { DatePipe } from '@angular/common';
import { AdmSubjectComponent } from './components/admin/adm-subject/adm-subject.component';
import { SubCModalComponent } from './components/admin/adm-subject/sub-c-modal/sub-c-modal.component';
import { SubUModalComponent } from './components/admin/adm-subject/sub-u-modal/sub-u-modal.component';
import { AmbVModalComponent } from './components/admin/adm-ambients/amb-v-modal/amb-v-modal.component';
import { AmbUModalComponent } from './components/admin/adm-ambients/amb-u-modal/amb-u-modal.component';
import { UserCModalComponent } from './components/admin/adm-users/user-c-modal/user-c-modal.component';
import { UserUModalComponent } from './components/admin/adm-users/user-u-modal/user-u-modal.component';
import { CourCModalComponent } from './components/admin/adm-course/cour-c-modal/cour-c-modal.component';
import { CourUModalComponent } from './components/admin/adm-course/cour-u-modal/cour-u-modal.component';
import { CouAModalComponent } from './components/admin/adm-subject/cou-a-modal/cou-a-modal.component';
import { AdmMaintenanceComponent } from './components/admin/adm-maintenance/adm-maintenance.component';
import { MainCModalComponent } from './components/admin/adm-maintenance/main-c-modal/main-c-modal.component';
import { MainUModalComponent } from './components/admin/adm-maintenance/main-u-modal/main-u-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    ControlerComponent,
    LoginComponent,
    AdmAmbientsComponent,
    AdmUsersComponent,
    AdmCourseComponent,
    AmbCModalComponent,
    UpdateAgendamentoComponent,
    NewAgeModComponent,
    AdmSubjectComponent,
    SubCModalComponent,
    SubUModalComponent,
    AmbVModalComponent,
    AmbUModalComponent,
    UserCModalComponent,
    UserUModalComponent,
    CourCModalComponent,
    CourUModalComponent,
    CouAModalComponent,
    AdmMaintenanceComponent,
    MainCModalComponent,
    MainUModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule,
    MatGridListModule,
    MatRadioModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,    
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient, FormBuilder, DatePipe,{
    provide: HTTP_INTERCEPTORS,
    useClass: TonkenInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
