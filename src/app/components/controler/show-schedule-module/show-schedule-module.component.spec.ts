import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowScheduleModuleComponent } from './show-schedule-module.component';

describe('ShowScheduleModuleComponent', () => {
  let component: ShowScheduleModuleComponent;
  let fixture: ComponentFixture<ShowScheduleModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowScheduleModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowScheduleModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
