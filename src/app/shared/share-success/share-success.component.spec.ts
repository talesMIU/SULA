import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareSuccessComponent } from './share-success.component';

describe('ShareSuccessComponent', () => {
  let component: ShareSuccessComponent;
  let fixture: ComponentFixture<ShareSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
