import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubShowAllModalComponent } from './sub-show-all-modal.component';

describe('SubShowAllModalComponent', () => {
  let component: SubShowAllModalComponent;
  let fixture: ComponentFixture<SubShowAllModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubShowAllModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubShowAllModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
