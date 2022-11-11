import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbVModalComponent } from './amb-v-modal.component';

describe('AmbVModalComponent', () => {
  let component: AmbVModalComponent;
  let fixture: ComponentFixture<AmbVModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbVModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbVModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
