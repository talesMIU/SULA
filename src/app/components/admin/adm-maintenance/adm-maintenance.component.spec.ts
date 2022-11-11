import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMaintenanceComponent } from './adm-maintenance.component';

describe('AdmMaintenanceComponent', () => {
  let component: AdmMaintenanceComponent;
  let fixture: ComponentFixture<AdmMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
