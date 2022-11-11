import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCModalComponent } from './user-c-modal.component';

describe('UserCModalComponent', () => {
  let component: UserCModalComponent;
  let fixture: ComponentFixture<UserCModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
