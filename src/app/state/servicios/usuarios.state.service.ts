import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosStateService {
  endpoint = 'http://localhost:3000/api/usuarios';
  constructor(private httpClient: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return new Observable<Usuario[]>((obs) => {
      this.httpClient.get(this.endpoint).subscribe({
        next: (data: any) => {
          const newData: Usuario[] = data.map((item: any) => ({
            id: item.id,
            firstName: item.firstName,
            lastName: item.lastName,
            email: item.email,
          }));
          obs.next(newData);
        },
        complete: () => {
          obs.complete();
        },
        error: (e) => {
          obs.error();
          console.log(e);
        },
      });
    });
  }
}
