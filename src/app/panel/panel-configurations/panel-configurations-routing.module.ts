import { TableroUsuariosComponent } from './usuarios/tablero-usuarios/tablero-usuarios.component';
import { ListUsuariosComponent } from './usuarios/list-usuarios/list-usuarios.component';
import { CreateUsuariosComponent } from './usuarios/create-usuarios/create-usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'usuarios',
    component: TableroUsuariosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelConfigurationsRoutingModule {}
