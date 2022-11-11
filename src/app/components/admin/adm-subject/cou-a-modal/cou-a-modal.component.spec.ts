import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouAModalComponent } from './cou-a-modal.component';

describe('CouAModalComponent', () => {
  let component: CouAModalComponent;
  let fixture: ComponentFixture<CouAModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouAModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouAModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
