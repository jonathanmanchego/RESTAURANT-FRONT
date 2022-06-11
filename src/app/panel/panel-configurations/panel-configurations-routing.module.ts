import { DashboardPanelConfigurationsComponent } from './dashboard-panel-configurations/dashboard-panel-configurations.component';
import { TableroUsuariosComponent } from './usuarios/tablero-usuarios/tablero-usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelConfigurationsComponent } from './panel-configurations.component';

const routes: Routes = [
  {
    path: '',
    component: PanelConfigurationsComponent,
    children: [
      {
        path: '',
        component: DashboardPanelConfigurationsComponent,
      },
      {
        path: 'usuarios',
        component: TableroUsuariosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelConfigurationsRoutingModule {}
