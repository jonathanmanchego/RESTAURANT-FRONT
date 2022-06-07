import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/state/interfaces/usuario';
import { UsuariosStateService } from 'src/app/state/servicios/usuarios.state.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.scss'],
})
export class ListUsuariosComponent implements OnInit {
  usuarios: MatTableDataSource<Usuario> = new MatTableDataSource<Usuario>([]);
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'email'];
  constructor(private readonly usuariosStateService: UsuariosStateService) {}

  ngOnInit(): void {
    this.initializeUsuarios();
  }
  initializeUsuarios(): void {
    this.usuariosStateService.getUsuarios().subscribe({
      next: (data: Usuario[]) => {
        this.usuarios = new MatTableDataSource(data);
      },
      complete: () => {},
      error: () => {},
    });
  }
}
