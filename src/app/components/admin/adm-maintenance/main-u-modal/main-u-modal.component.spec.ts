import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUModalComponent } from './main-u-modal.component';

describe('MainUModalComponent', () => {
  let component: MainUModalComponent;
  let fixture: ComponentFixture<MainUModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainUModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainUModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
