import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSolutionComponent } from './software-solution.component';

describe('SoftwareSolutionComponent', () => {
  let component: SoftwareSolutionComponent;
  let fixture: ComponentFixture<SoftwareSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
