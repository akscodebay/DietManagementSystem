import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivatorHomeComponent } from './motivator-home.component';

describe('MotivatorHomeComponent', () => {
  let component: MotivatorHomeComponent;
  let fixture: ComponentFixture<MotivatorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivatorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivatorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
