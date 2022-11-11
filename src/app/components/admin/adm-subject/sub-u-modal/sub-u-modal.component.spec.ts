import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubUModalComponent } from './sub-u-modal.component';

describe('SubUModalComponent', () => {
  let component: SubUModalComponent;
  let fixture: ComponentFixture<SubUModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubUModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubUModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
