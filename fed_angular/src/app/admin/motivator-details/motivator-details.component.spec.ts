import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivatorDetailsComponent } from './motivator-details.component';

describe('MotivatorDetailsComponent', () => {
  let component: MotivatorDetailsComponent;
  let fixture: ComponentFixture<MotivatorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivatorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivatorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
