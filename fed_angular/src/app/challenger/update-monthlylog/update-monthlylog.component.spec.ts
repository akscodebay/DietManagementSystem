import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMonthlylogComponent } from './update-monthlylog.component';

describe('UpdateMonthlylogComponent', () => {
  let component: UpdateMonthlylogComponent;
  let fixture: ComponentFixture<UpdateMonthlylogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMonthlylogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMonthlylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
