import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmSubjectComponent } from './adm-subject.component';

describe('AdmSubjectComponent', () => {
  let component: AdmSubjectComponent;
  let fixture: ComponentFixture<AdmSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
