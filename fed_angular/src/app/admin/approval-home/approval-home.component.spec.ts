import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalHomeComponent } from './approval-home.component';

describe('ApprovalHomeComponent', () => {
  let component: ApprovalHomeComponent;
  let fixture: ComponentFixture<ApprovalHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
