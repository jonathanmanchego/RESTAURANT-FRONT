import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelConfigurationsRoutingModule } from './panel-configurations-routing.module';
import { ListUsuariosComponent } from './usuarios/list-usuarios/list-usuarios.component';
import { CreateUsuariosComponent } from './usuarios/create-usuarios/create-usuarios.component';
import { TableroUsuariosComponent } from './usuarios/tablero-usuarios/tablero-usuarios.component';
import { MatTable, MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ListUsuariosComponent,
    CreateUsuariosComponent,
    TableroUsuariosComponent,
  ],
  imports: [CommonModule, PanelConfigurationsRoutingModule, MatTableModule],
})
export class PanelConfigurationsModule {}
