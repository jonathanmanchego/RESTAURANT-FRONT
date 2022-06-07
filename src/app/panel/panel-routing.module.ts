import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'configuraciones',
    loadChildren: () =>
      import('./panel-configurations/panel-configurations.module').then(
        (m) => m.PanelConfigurationsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
