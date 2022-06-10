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

const MATERIAL_MODULES = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatIconModule
];

@NgModule({
  declarations: [
    ListUsuariosComponent,
    CreateUsuariosComponent,
    TableroUsuariosComponent,
  ],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    FormsModule,
    ReactiveFormsModule,
    PanelConfigurationsRoutingModule,
  ],
})
export class PanelConfigurationsModule {}
