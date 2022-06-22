import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { General } from '../interfaces/general';

interface ResponseArray<Type> {
  status: boolean;
  msg: string;
  data: [Type];
}
interface ResponseCreate<Type> {
  status: boolean;
  msg: string;
  data: Type;
}
@Injectable({
  providedIn: 'root',
})
export abstract class StateService<Type extends General> {
  private map = new Map<number, Type>();
  protected url = '';
  protected http!: HttpClient;
  private pathBackend = environment.backend;
  public subjectToUpdate = new Subject<boolean>();

  getValues(): Array<Type> {
    return Array.from(this.map.values());
  }

  create(item: Type): Observable<Type> {
    return new Observable((observer) => {
      this.http.post(`${this.pathBackend + this.url}`, item).subscribe({
        next: (created: any) => {
          const item = created as Type;
          this.map.set(item.id, item);
          observer.next(item);
          this.subjectToUpdate.next(true);
        },
        complete: () => observer.complete(),
        error: (error) => {
          observer.error(error);
        },
      });
    });
  }
  getAll(
    filterParameters: { [key: string]: string } = {}
  ): Observable<Array<Type>> {
    return new Observable((observer) => {
      this.http
        .get(`${this.pathBackend + this.url}`, {
          params: filterParameters,
        })
        .subscribe({
          next: (responseArray: any) => {
            const items = responseArray as Array<Type>;
            for (const item of responseArray) {
              const previous = this.map.get(item.id);
              this.map.set(item.id, { ...previous, ...item });
            }
            observer.next(items);
          },
          complete: () => {
            observer.complete();
          },
          error: (error: any) => {
            observer.error(error);
          },
        });
    });
  }
  delete(id: number): Observable<Type> {
    return new Observable((observer) => {
      this.http.delete(`${this.pathBackend + this.url}/${id}`).subscribe({
        next: (deleted: any) => {
          const item = deleted as Type;
          this.map.delete(item.id);
          observer.next(item);
          this.subjectToUpdate.next(true);
        },
        complete: () => observer.complete(),
        error: (error) => {
          observer.error(error);
        },
      });
    });
  }
}
