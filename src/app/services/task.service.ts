// src/app/services/task.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TaskModel } from '../core/models/task.model';
import { CargarTareas, IUser } from '../core/interfaces/index.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = `${environment.base_url}/tasks/all`; // Asegúrate de que la URL es correcta

  constructor(private http: HttpClient) {}

  cargarTareas(): Observable<TaskModel[]> {
    return this.http.get<CargarTareas>(this.apiUrl, { headers: this.headers }).pipe(
 
map(resp => {
  return resp.tareas.map(taskData => {
    const creator: any = taskData.creator || { uid: '', name: '', email: '' }; // Ajusta los valores predeterminados según sea necesario
    const assignedTo: any = taskData.assignedTo || { uid: '', name: '', email: '' }; // Ajusta los valores predeterminados según sea necesario

    return new TaskModel(
      taskData.title,
      taskData.description,
      creator.name,
      assignedTo,
      taskData._id,
      taskData.completed,
      taskData.createdAt,
      taskData.updatedAt,
    );
  });
})

    );
  }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      'x-token': this.token,
    };
  }
}
