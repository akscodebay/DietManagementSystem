import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengerHomeComponent } from './challenger-home.component';

describe('ChallengerHomeComponent', () => {
  let component: ChallengerHomeComponent;
  let fixture: ComponentFixture<ChallengerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
