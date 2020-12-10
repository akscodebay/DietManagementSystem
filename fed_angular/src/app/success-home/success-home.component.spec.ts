import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessHomeComponent } from './success-home.component';

describe('SuccessHomeComponent', () => {
  let component: SuccessHomeComponent;
  let fixture: ComponentFixture<SuccessHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
