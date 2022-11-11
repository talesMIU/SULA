import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourUModalComponent } from './cour-u-modal.component';

describe('CourUModalComponent', () => {
  let component: CourUModalComponent;
  let fixture: ComponentFixture<CourUModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourUModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourUModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
