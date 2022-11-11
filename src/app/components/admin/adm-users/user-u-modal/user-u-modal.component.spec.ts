import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUModalComponent } from './user-u-modal.component';

describe('UserUModalComponent', () => {
  let component: UserUModalComponent;
  let fixture: ComponentFixture<UserUModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
