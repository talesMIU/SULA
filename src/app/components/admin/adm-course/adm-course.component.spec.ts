import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCourseComponent } from './adm-course.component';

describe('AdmConfigComponent', () => {
  let component: AdmCourseComponent;
  let fixture: ComponentFixture<AdmCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
