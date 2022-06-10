import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerRestaurantComponent } from './drawer-restaurant.component';

describe('DrawerRestaurantComponent', () => {
  let component: DrawerRestaurantComponent;
  let fixture: ComponentFixture<DrawerRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
