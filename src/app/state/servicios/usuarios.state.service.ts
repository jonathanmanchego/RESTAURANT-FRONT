import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from 'src/app/services/state.service';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosStateService extends StateService<Usuario> {
  constructor() {
    super();
    this.url = 'api/usuarios';
    this.http = inject(HttpClient);
  }
}
