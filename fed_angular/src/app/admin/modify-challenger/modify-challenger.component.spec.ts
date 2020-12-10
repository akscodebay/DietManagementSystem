import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyChallengerComponent } from './modify-challenger.component';

describe('ModifyChallengerComponent', () => {
  let component: ModifyChallengerComponent;
  let fixture: ComponentFixture<ModifyChallengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyChallengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyChallengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
