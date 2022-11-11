import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbUModalComponent } from './amb-u-modal.component';

describe('AmbUModalComponent', () => {
  let component: AmbUModalComponent;
  let fixture: ComponentFixture<AmbUModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbUModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbUModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
