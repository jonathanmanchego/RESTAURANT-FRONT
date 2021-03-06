import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/state/interfaces/usuario';
import { UsuariosStateService } from 'src/app/state/servicios/usuarios.state.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-usuarios',
  templateUrl: './create-usuarios.component.html',
  styleUrls: ['./create-usuarios.component.scss'],
})
export class CreateUsuariosComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  loading = false;
  constructor(private readonly usuariosStateService: UsuariosStateService) {}

  ngOnInit(): void {}
  getErrorMessageFromFormField(field: string): string {
    const control = this.form.get(field);
    if (control) {
      if (control.hasError('required')) {
        return 'Debe ingresar un valor';
      }
      if (control.hasError('email')) {
        return 'No es un correo valido';
      }
    }
    return '';
  }
  saveUser(): void {
    if (this.form.valid) {
      const usuarioToSave: Usuario = {
        ...this.form.value,
      };
      this.loading = true;
      this.usuariosStateService.create(usuarioToSave).subscribe({
        next: (data: Usuario) => {},
        complete: () => {
          this.loading = false;
          Swal.fire({
            title: 'Bien hecho!',
            text: 'El usuario se ha creado correctamente',
            icon: 'success',
            timer: 2000,
          });
        },
        error: () => {
          this.loading = false;
          Swal.fire({
            title: 'Error!',
            text: 'El usuario no se ha creado correctamente',
            icon: 'error',
            timer: 2000,
          });
        },
      });
    }
  }
}
