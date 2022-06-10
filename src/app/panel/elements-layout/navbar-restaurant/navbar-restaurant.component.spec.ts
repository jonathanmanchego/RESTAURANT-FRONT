import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRestaurantComponent } from './navbar-restaurant.component';

describe('NavbarRestaurantComponent', () => {
  let component: NavbarRestaurantComponent;
  let fixture: ComponentFixture<NavbarRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
