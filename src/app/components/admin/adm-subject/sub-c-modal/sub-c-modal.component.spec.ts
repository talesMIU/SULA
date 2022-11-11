import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCModalComponent } from './sub-c-modal.component';

describe('SubCModalComponent', () => {
  let component: SubCModalComponent;
  let fixture: ComponentFixture<SubCModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
