import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourCModalComponent } from './cour-c-modal.component';

describe('CourCModalComponent', () => {
  let component: CourCModalComponent;
  let fixture: ComponentFixture<CourCModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourCModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourCModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
