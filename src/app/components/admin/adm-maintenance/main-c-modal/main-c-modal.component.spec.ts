import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCModalComponent } from './main-c-modal.component';

describe('MainCModalComponent', () => {
  let component: MainCModalComponent;
  let fixture: ComponentFixture<MainCModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
