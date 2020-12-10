import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageMotivatorComponent } from './send-message-motivator.component';

describe('SendMessageMotivatorComponent', () => {
  let component: SendMessageMotivatorComponent;
  let fixture: ComponentFixture<SendMessageMotivatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMessageMotivatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMessageMotivatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
