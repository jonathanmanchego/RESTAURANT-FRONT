import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/state/interfaces/usuario';
import { UsuariosStateService } from 'src/app/state/servicios/usuarios.state.service';

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
  constructor(private readonly usuariosStateService: UsuariosStateService) {}

  ngOnInit(): void {}
  getErrorMessageFromFormField(field: string): string {
    const control = this.form.get(field);
    if (control) {
      if (control.hasError('required')) {
        return 'You must enter a value';
      }
      if (control.hasError('email')) {
        return 'Not a valid email';
      }
    }
    return '';
  }
  saveUser(): void {
    if (this.form.valid) {
      const usuarioToSave: Usuario = {
        ...this.form.value,
      };
      this.usuariosStateService.postCreateUsuario(usuarioToSave).subscribe({
        next: (data: Usuario) => {

        },
        complete: () => {},
        error: () => {},
      });
    }
  }
}
