import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/state/interfaces/usuario';
import { UsuariosStateService } from 'src/app/state/servicios/usuarios.state.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.scss'],
})
export class ListUsuariosComponent implements OnInit, OnDestroy {
  @Output() usuarioToEdit = new EventEmitter();
  usuarios: MatTableDataSource<Usuario> = new MatTableDataSource<Usuario>([]);
  displayedColumns: string[] = ['position', 'fullName', 'email', 'actions'];
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
  editUser(usuario: Usuario): void {
    this.usuarioToEdit.emit(usuario);
  }
  deleteUser(id: number): void {
    Swal.fire({
      title: '¿Está seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuariosStateService.delete(id).subscribe({
          next: () => {
            Swal.fire('Usuario eliminado', '', 'success');
          },
          error: (error) => {
            Swal.fire('Error', error.message, 'error');
          },
        });
      }
    });
  }
  ngOnDestroy(): void {
    this.suscriptionListUsuarios.unsubscribe();
  }
}
