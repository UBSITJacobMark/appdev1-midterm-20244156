import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddComponent } from './task-add-component';

describe('TaskAddComponent', () => {
  let component: TaskAddComponent;
  let fixture: ComponentFixture<TaskAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskAddComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
