import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipurposePopupComponent } from './multipurpose-popup.component';

describe('MultipurposePopupComponent', () => {
  let component: MultipurposePopupComponent;
  let fixture: ComponentFixture<MultipurposePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipurposePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipurposePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
