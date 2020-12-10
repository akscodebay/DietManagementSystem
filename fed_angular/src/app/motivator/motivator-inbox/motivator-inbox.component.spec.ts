import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivatorInboxComponent } from './motivator-inbox.component';

describe('MotivatorInboxComponent', () => {
  let component: MotivatorInboxComponent;
  let fixture: ComponentFixture<MotivatorInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivatorInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivatorInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
