import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavManueComponent } from './nav-manue.component';

describe('NavManueComponent', () => {
  let component: NavManueComponent;
  let fixture: ComponentFixture<NavManueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavManueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavManueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
