import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareFailedComponent } from './share-failed.component';

describe('ShareFailedComponent', () => {
  let component: ShareFailedComponent;
  let fixture: ComponentFixture<ShareFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareFailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
