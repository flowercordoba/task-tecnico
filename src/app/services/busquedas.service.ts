import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Usuario } from '../core/models/user.model';

const base_url = environment.base_url;

interface BusquedaResponse {
  resultados: Usuario[];
}

@Injectable({
  providedIn: 'root'
})
export class BusquedasService {
  constructor(private http: HttpClient) { }

  private get token(): string {
    return localStorage.getItem('token') || '';
  }

  private get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  private transformarUsuarios(resultados: Usuario[]): Usuario[] {
    return resultados.map(
      user => new Usuario(user.name, user.email, '', user.img, user.google, user.role, user.uid)
    );
  }

  buscar(tipo: 'usuarios' | 'task' | '', termino: string): Observable<Usuario[] | any[]> {
    const url = `${base_url}/todo/coleccion/${tipo}/${termino}`;
    return this.http.get<BusquedaResponse>(url, this.headers)
      .pipe(
        map(resp => {
          switch (tipo) {
            case 'usuarios':
              return this.transformarUsuarios(resp.resultados);

            // Agrega más casos según sea necesario

            default:
              return [];
          }
        }),
        catchError(error => {
          console.error('Error en la búsqueda:', error);
          return of([]);
        })
      );
  }
}
