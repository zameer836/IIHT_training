import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegComponent } from './student-reg.component';

describe('StudentRegComponent', () => {
  let component: StudentRegComponent;
  let fixture: ComponentFixture<StudentRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
