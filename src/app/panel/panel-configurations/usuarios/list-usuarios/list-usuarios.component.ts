import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/state/interfaces/usuario';
import { UsuariosStateService } from 'src/app/state/servicios/usuarios.state.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.scss'],
})
export class ListUsuariosComponent implements OnInit, OnDestroy {
  usuarios: MatTableDataSource<Usuario> = new MatTableDataSource<Usuario>([]);
  displayedColumns: string[] = ['position', 'fullName', 'email'];
  suscriptionListUsuarios = new Subscription();
  constructor(private readonly usuariosStateService: UsuariosStateService) {}

  ngOnInit(): void {
    this.initializeUsuarios();
    this.suscriptionListUsuarios =
      this.usuariosStateService.subjectToUpdate.subscribe(() => {
        this.setUsuarios();
      });
  }
  initializeUsuarios(): void {
    this.usuariosStateService.getAll().subscribe({
      next: (data: Usuario[]) => {
        this.usuarios = new MatTableDataSource(data);
      },
      complete: () => {},
      error: () => {},
    });
  }
  setUsuarios(): void {
    this.usuarios = new MatTableDataSource(
      this.usuariosStateService.getValues()
    );
  }
  ngOnDestroy(): void {
    this.suscriptionListUsuarios.unsubscribe();
  }
}
