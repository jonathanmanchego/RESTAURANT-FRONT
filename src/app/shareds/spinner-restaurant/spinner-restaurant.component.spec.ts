import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerRestaurantComponent } from './spinner-restaurant.component';

describe('SpinnerRestaurantComponent', () => {
  let component: SpinnerRestaurantComponent;
  let fixture: ComponentFixture<SpinnerRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
