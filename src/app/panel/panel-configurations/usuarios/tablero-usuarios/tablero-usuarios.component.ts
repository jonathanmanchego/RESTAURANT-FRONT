import { Usuario } from './../../../../state/interfaces/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero-usuarios',
  templateUrl: './tablero-usuarios.component.html',
  styleUrls: ['./tablero-usuarios.component.scss'],
})
export class TableroUsuariosComponent implements OnInit {
  usuarioToEdit: Usuario | undefined;
  showEditUser: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  editUser(usuario: Usuario): void {
    this.usuarioToEdit = usuario;
    this.showEditUser = true;
  }
}
