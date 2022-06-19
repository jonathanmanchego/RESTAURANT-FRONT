import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerRestaurantComponent } from './spinner-restaurant/spinner-restaurant.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [SpinnerRestaurantComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [SpinnerRestaurantComponent],
})
export class SharedsModule {}
