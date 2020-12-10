import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignBatchandgroupComponent } from './assign-batchandgroup.component';

describe('AssignBatchandgroupComponent', () => {
  let component: AssignBatchandgroupComponent;
  let fixture: ComponentFixture<AssignBatchandgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignBatchandgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignBatchandgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
