import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelConfigurationsRoutingModule } from './panel-configurations-routing.module';
import { ListUsuariosComponent } from './usuarios/list-usuarios/list-usuarios.component';
import { CreateUsuariosComponent } from './usuarios/create-usuarios/create-usuarios.component';
import { TableroUsuariosComponent } from './usuarios/tablero-usuarios/tablero-usuarios.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PanelConfigurationsComponent } from './panel-configurations.component';
import { DashboardPanelConfigurationsComponent } from './dashboard-panel-configurations/dashboard-panel-configurations.component';
import { SharedsModule } from 'src/app/shareds/shareds.module';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatIconModule,
];

@NgModule({
  declarations: [
    ListUsuariosComponent,
    CreateUsuariosComponent,
    TableroUsuariosComponent,
    PanelConfigurationsComponent,
    DashboardPanelConfigurationsComponent,
  ],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    FormsModule,
    SharedsModule,
    ReactiveFormsModule,
    PanelConfigurationsRoutingModule,
  ],
})
export class PanelConfigurationsModule {}
