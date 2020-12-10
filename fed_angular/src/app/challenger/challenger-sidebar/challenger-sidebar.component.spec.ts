import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengerSidebarComponent } from './challenger-sidebar.component';

describe('ChallengerSidebarComponent', () => {
  let component: ChallengerSidebarComponent;
  let fixture: ComponentFixture<ChallengerSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengerSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
