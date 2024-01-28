// src/app/services/task.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'; 
import { TaskModel } from '../core/models/task.model';

const base_url = environment.base_url;



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public tarea!: TaskModel; 
  constructor(private http: HttpClient) {}

  get headers() {
    return {
      headers: {
        "x-token": this.token,
      },
    };
  }
  get token(): string {
    return localStorage.getItem("token") || "";
  }

  // get uid(): string {
  //   return this.usuario.uid || "";
  // }



  // cargarUsuarios(desde: number = 0) {
  //   const url = `${base_url}/users/all?desde=${desde}`;
  //   return this.http.get<CargarUsuario>(url, this.headers).pipe(
  //     map((resp) => {
  //       const usuarios = resp.usuarios.map(
  //         (user) =>
  //           new Usuario(
  //             user.name,
  //             user.email,
  //             "",
  //             user.img,
  //             user.google,
  //             user.role,
  //             user.uid
  //           )
  //       );
  //       return {
  //         total: resp.total,
  //         usuarios,
  //       };
  //     })
  //   );
  // }



}
