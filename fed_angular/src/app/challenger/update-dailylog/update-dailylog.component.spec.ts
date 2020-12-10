import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDailylogComponent } from './update-dailylog.component';

describe('UpdateDailylogComponent', () => {
  let component: UpdateDailylogComponent;
  let fixture: ComponentFixture<UpdateDailylogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDailylogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDailylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
