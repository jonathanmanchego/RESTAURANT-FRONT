import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavbarRestaurantComponent } from './elements-layout/navbar-restaurant/navbar-restaurant.component';
import { DrawerRestaurantComponent } from './elements-layout/drawer-restaurant/drawer-restaurant.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
];
@NgModule({
  declarations: [
    PanelComponent,
    NavbarRestaurantComponent,
    DrawerRestaurantComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PanelRoutingModule,
    ...MATERIAL_MODULES,
  ],
})
export class PanelModule {}
