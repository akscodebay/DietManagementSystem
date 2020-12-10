import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivatorSidebarComponent } from './motivator-sidebar.component';

describe('MotivatorSidebarComponent', () => {
  let component: MotivatorSidebarComponent;
  let fixture: ComponentFixture<MotivatorSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivatorSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivatorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
