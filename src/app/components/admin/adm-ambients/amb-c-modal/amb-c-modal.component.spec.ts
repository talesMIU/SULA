import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbCModalComponent } from './amb-c-modal.component';

describe('SModalComponent', () => {
  let component: AmbCModalComponent;
  let fixture: ComponentFixture<AmbCModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbCModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbCModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
