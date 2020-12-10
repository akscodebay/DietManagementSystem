import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMotivatorComponent } from './modify-motivator.component';

describe('ModifyMotivatorComponent', () => {
  let component: ModifyMotivatorComponent;
  let fixture: ComponentFixture<ModifyMotivatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyMotivatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyMotivatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
