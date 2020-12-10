import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignMotivatorComponent } from './assign-motivator.component';

describe('AssignMotivatorComponent', () => {
  let component: AssignMotivatorComponent;
  let fixture: ComponentFixture<AssignMotivatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignMotivatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignMotivatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
