// src/app/services/task.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; // Ajusta la ruta si es necesario
import { TaskModel } from '../core/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = `${environment.base_url}/task`; // Ajusta esto según tu configuración

  constructor(private http: HttpClient) {}

  // Obtener todas las tareas
  getAllTasks(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(`${this.apiUrl}/all`);
  }

  // Obtener una tarea específica por su ID
  getTaskById(taskId: string): Observable<TaskModel> {
    return this.http.get<TaskModel>(`${this.apiUrl}/${taskId}`);
  }

  // Crear una nueva tarea
  createTask(taskData: TaskModel): Observable<TaskModel> {
    return this.http.post<TaskModel>(`${this.apiUrl}/create`, taskData);
  }

  // Actualizar una tarea existente
  updateTask(taskId: string, taskData: TaskModel): Observable<TaskModel> {
    return this.http.put<TaskModel>(`${this.apiUrl}/update/${taskId}`, taskData);
  }

  // Marcar una tarea como completada
  markTaskAsCompleted(taskId: string): Observable<TaskModel> {
    return this.http.patch<TaskModel>(`${this.apiUrl}/complete/${taskId}`, {});
  }

  // Eliminar una tarea
  deleteTask(taskId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${taskId}`);
  }


}
